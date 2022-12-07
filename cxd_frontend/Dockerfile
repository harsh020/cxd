FROM node:12.18.3

ARG WORKDIR=/app

COPY package.json /package.json
COPY package-lock.json /package-lock.json

RUN ["npm", "install"]

COPY . /app

WORKDIR ${WORKDIR}

CMD ["npm", "start"]