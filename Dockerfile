FROM node:8-alpine

WORKDIR /app
ADD . /app
CMD [ "node", "build/server.js" ]
