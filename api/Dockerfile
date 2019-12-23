FROM mhart/alpine-node:latest as builder

RUN apk update
RUN apk add bash curl postgresql-client
RUN npm install -g typescript typeorm

WORKDIR /api
COPY . /api

RUN npm install
RUN npm run build
