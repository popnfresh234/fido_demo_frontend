### STAGE 1:BUILD ###
# Defining a node image to be used as giving it an alias of "build"
# Which version of Node image to use depends on project dependencies 
# This is needed to build and compile our code 
# while generating the docker image
FROM node:current-alpine3.17 AS build
# Create a Virtual directory inside the docker image
WORKDIR /dist/src/app
# Copy files to virtual directory
# COPY package.json package-lock.json ./
# Run command in Virtual directory
RUN npm cache clean --force
# Copy files from local machine to virtual directory in docker image
COPY . .
RUN npm install
RUN npm run build --prod


### STAGE 2:RUN ###
# Defining nginx image to be used
FROM nginxinc/nginx-unprivileged:latest AS ngi
# Copying compiled code and nginx config to different folder
# NOTE: This path may change according to your project's output folder 
COPY --from=build /dist/src/app/dist/frontend /usr/share/nginx/html
COPY /src/ssl/webcomm_demo_frontend.crt.pem /etc/nginx/certs/server.crt
COPY /src/ssl/webcomm_demo_frontend.key.pem /etc/nginx/certs/server.key

COPY /nginx.conf  /etc/nginx/conf.d/default.conf
RUN ls /etc/nginx/certs/
# Exposing a port, here it means that inside the container 
# the app will be using Port 80 while running
EXPOSE 8443
#SSL Certificate

# docker build -t demo_frontend -f ./Dockerfile .
# docker run -p 4200:80 -d demo_frontend