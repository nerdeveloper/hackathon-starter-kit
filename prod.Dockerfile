FROM node:8-alpine 

ARG NODE_ENV=production
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

LABEL maintainer="Obinna Odirionye"

COPY ./app ./

COPY variable.env ./

COPY package* ./

RUN npm install --production

CMD ["node", "dist/server.js"]

