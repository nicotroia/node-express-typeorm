FROM centos:7 as builder

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum update -y update && \
    yum install -y nodejs && \
    yum clean all && \
    npm install -g typescript

VOLUME /app
WORKDIR /app
COPY . /app
COPY ./init /docker-entrypoint-initdb.d/

RUN npm ci --only=production

EXPOSE ${PORT}
