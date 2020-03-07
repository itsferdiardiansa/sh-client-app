#!/bin/bash

# build docker image
docker-compose build client-app

# run test
docker-compose run client-app integration:test

# create build source
docker-compose run client-app build

# build docker image source
docker-compose build client-app-prod

# cretae docker tag
# docker tag sh-client-app_client-app-prod:latest ferdiardiansa/social-media:latest
