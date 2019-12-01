FROM mhart/alpine-node:latest as builder

RUN apk update
RUN apk add bash
RUN npm install -g typescript

WORKDIR /app
COPY . /app
COPY ./init /docker-entrypoint-initdb.d/

RUN npm install
RUN npm run build

EXPOSE ${PORT}
