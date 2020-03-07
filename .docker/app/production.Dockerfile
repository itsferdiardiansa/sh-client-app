FROM node as production

# MAINTAINER <ferdi.ardiansa@gmail.com>
ARG NODE_ENV

RUN echo "you are in ${NODE_ENV} mode"

USER root

# Create app directory
RUN mkdir /usr/app

# Setup working directory
WORKDIR /usr/app

COPY ./build /usr/app

# Print list in the directory
RUN ls -fl

FROM nginx:latest

COPY --from=production /usr/app /usr/share/nginx/html

EXPOSE 4001

CMD ["nginx", "-g", "daemon off;"]