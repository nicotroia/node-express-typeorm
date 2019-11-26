FROM centos:7

RUN curl -sL https://rpm.nodesource.com/setup_12.x | bash -
RUN yum update -y update && \
    yum install -y nodejs && \
    yum clean all

WORKDIR /app
ADD . /app

RUN npm ci --only=production
RUN npm run build

EXPOSE 3000

CMD ["node", "dist/index.js"]
