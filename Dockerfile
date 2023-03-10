FROM node:12-alpine
WORKDIR /usr/src/app
COPY package*.json ./
COPY . .
CMD [ "npm","start" ]
