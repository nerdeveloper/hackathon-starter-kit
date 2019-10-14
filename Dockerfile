# Our first stage, that is the Builder
FROM node:10-alpine AS builder

WORKDIR /hackathon

COPY . .

LABEL maintainer="Obinna Odirionye"

RUN npm install

RUN npm run docker:build

RUN npm run copy-assets

RUN rm -rf node_modules




# Our Second stage, that creates the final image.
FROM node:10-alpine 

LABEL maintainer="Obinna Odirionye"

ARG NODE_ENV=development
ENV NODE_ENV=${NODE_ENV}

WORKDIR /app

COPY --from=builder ./hackathon/app ./

COPY package* ./

RUN npm install --production


RUN npm i -g nodemon

EXPOSE 3000

CMD ["nodemon", "dist/server.js", "--public"]

