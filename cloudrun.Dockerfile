# # Our first stage, that is the Builder
# FROM node:8-alpine AS builder

# WORKDIR /hackathon

# COPY . .

# COPY variable.env ./

# LABEL maintainer="Obinna Odirionye"

# RUN npm install

# RUN npm run docker:build

# RUN npm run copy-assets

# RUN rm -rf node_modules




# Our Second stage, that creates an image for production
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

