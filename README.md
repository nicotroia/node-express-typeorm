# Node.js + Express + TypeORM with TypeScript

## Setting up development environment

* Install [Docker](https://docs.docker.com/docker-for-mac/install/)
* Install `docker-sync` by running `gem install --user-install docker-sync`
* Add `export PATH=$PATH:$HOME/.gem/ruby/2.3.0/bin` line to your local `.bashrc` or `.zshrc` configuration
* Run `docker-sync-stack start`
* Visit <http://localhost:3000/>

Alternatively, you can launch development environment without `docker-sync` by running  
`docker-compose -f docker-compose.yml -f docker-compose.dev.yml up`

Note, that in this case there might be a conflict in `node_modules` between local and container environments.

### Connect to Node container

Node is running on port `3000`. You can connect to the container by running the following command:

`docker exec -it project-node bash`

### PostgreSQL

Default PostgreSQL port is exposed to localhost, so you can connect to it using your favorite database management tool.

**Host:** localhost  
**Port:** 5432  
**Username:** postgres  
**Password:** '' (empty)  
**Database:** project  
**Schema:** public  
