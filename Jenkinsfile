pipeline {
    parameters {
          string(name: 'HOST', description: 'Ingress host', defaultValue: 'poc.inma.com')
          choice(name: 'NAMESPACE', choices: ['axa-motors'], description: 'K8s Namespace')
          choice(name: 'DOCKER_REGISTRY', choices: ['registry.sumerge.local'], description: 'Docker registry')
        }
    environment {
      registry = "${DOCKER_REGISTRY}/axa-motors/"
	    dockerImage = ''
    }

    agent {
        kubernetes {
            cloud 'kubernetes'
            inheritFrom 'k8s-jnlp-npm14'
        }
    }

    options {
        skipStagesAfterUnstable()
        disableConcurrentBuilds()
    }
    stages {

	  stage('Build') {
            steps {
              script{
                    sh 'npm cache verify'
                    sh 'npm install'
                    sh 'npm run build'
              }
              stash includes: '**', name: 'build'
            }
          }


	  stage('Docker'){
        stages {
		  stage('Create Image') {
            steps {
              script {
              unstash 'build'
                sh 'sed -i "s|@DOCKER_REGISTRY@|${DOCKER_REGISTRY}|g" Dockerfile'
                dockerImage = docker.build registry + "poc-root:$BUILD_NUMBER"
              }
            }
          }

          stage('Push Image') {
            steps {
              script {
                docker.withRegistry( '' ) {
                dockerImage.push()
			  }
            }
          }
        }
	  }
	}

	stage ('K8s deploy') {
      steps{
        sh """
        sed -i "s|@BUILD_NUMBER@|${BUILD_NUMBER}|g" $WORKSPACE/kubernetes.yml
        sed -i "s|@HOST@|${HOST}|g" $WORKSPACE/kubernetes.yml
        sed -i "s|@DOCKER_REGISTRY@|${DOCKER_REGISTRY}|g" $WORKSPACE/kubernetes.yml
        kubectl apply -f $WORKSPACE/kubernetes.yml -n ${NAMESPACE}
        """
      }
    }
  }
}
