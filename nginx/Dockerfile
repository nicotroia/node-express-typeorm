FROM nginx:alpine

RUN apk update && apk add bash

RUN adduser -D -H -u 1000 -s /bin/bash www-data -G www-data

COPY . /nginx
# COPY ./prod/nginx.conf /etc/nginx/nginx.conf
WORKDIR /nginx

EXPOSE 8080

CMD ["nginx", "-g", "daemon off;"]
