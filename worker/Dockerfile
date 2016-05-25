FROM ubuntu

RUN apt-get update && \
  apt-get -y install sudo curl && \
  curl -sL https://deb.nodesource.com/setup_6.x | sudo bash - && \
  apt-get -y install build-essential nodejs

RUN npm install -g nodemon

COPY package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p /src/app && cp -a /tmp/node_modules /src/app

WORKDIR /src/app
COPY /src /src/app

EXPOSE  8080

# CMD ["npm", "start"]
CMD ["nodemon", "/src/app/index.js"]
