FROM @DOCKER_REGISTRY@/library/nginx:1.15
#Copy ci-login-dist
COPY --chown=nginx dist /usr/share/nginx/html
#Copy default nginx configuration
COPY --chown=nginx nginx-custom.conf /etc/nginx/conf.d/default.conf

