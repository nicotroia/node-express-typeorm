FROM centos:7

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum update -y update && \
    yum install -y nodejs && \
    yum clean all

WORKDIR /app
ADD . /app
COPY ./init /docker-entrypoint-initdb.d/

RUN npm install -g typescript
RUN npm ci --only=production
RUN npm run build

EXPOSE ${PORT}

ENTRYPOINT node dist/index.js 
# CMD node dist/index.js 
