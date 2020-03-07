FROM node

# MAINTAINER <ferdi.ardiansa@gmail.com>
ARG NODE_ENV

RUN echo "you are in ${NODE_ENV} mode"

USER root

# Update and install OS app
# RUN apt-get update -y && \
#     apt-get install -y vim

# Create app directory
RUN mkdir /usr/app

# Setup working directory
WORKDIR /usr/app

COPY . /usr/app

RUN if [ "${NODE_ENV}" = "development" ]; \
      then npm i -loglevel info; \
      else npm i --only=production; \
    fi

# Print list in the directory
RUN ls -fl

# Setup command
ENTRYPOINT ["npm", "run"]