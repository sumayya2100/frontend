FROM node:10-alpine

LABEL name="Node Express Application" \   
     maintainer="Sumayya <sumayya2100@gmail.com>" \
     summary="A Node Express application - SS"

# Create app directory
WORKDIR /app
EXPOSE 8080
COPY package*.json ./
RUN npm install
COPY server.js ./
RUN apk add curl 

CMD [ "npm", "start" ]