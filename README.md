# docker-hello

A simple express application to test docker compose. It renders a simple pug homepage with a random quote and the visitor number. This vistor number is stored in a redis container seperate to the application allowing it to be load balanced.

## Requirements

 - docker
 - docker-compose
 - Node (development)

## Setup

cd into the root of the project and then run the following command to build the container image on your machine:

```
docker-compose build
```

*Note that you will need to run this command after every change you make.*

To run the container locally run the following command:

```
docker-compose up
```

Visit [localhost:3000](http://127.0.0.1:3000/) to see the result.

