# build environment
FROM node:18.12.1-alpine3.17 as build
WORKDIR /app
RUN npm install -g npm@8.19.2
ENV PATH /app/node_modules/.bin:$PATH
COPY package.json ./
COPY package-lock.json ./
RUN npm ci -silent --legacy-peer-deps
COPY . ./
RUN npm run build --configuration=production

# production environment
FROM nginx:1.20.0-alpine
COPY --chown=nginx --from=build /app/dist/login-project-mc /usr/share/nginx/html
COPY --chown=nginx ./nginx-custom.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
