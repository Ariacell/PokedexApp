FROM node:8.7.0-alpine

RUN mkdir -p /app/pokedex-microapp-server
WORKDIR /app/pokedex-microapp-server

COPY package.json /app/pokedex-microapp-server
COPY package-lock.json /app/pokedex-microapp-server
COPY nodemon.json  /app/pokedex-microapp-server

RUN npm install
COPY . /app/pokedex-microapp-server

CMD ["npm", "run". "tsc", "&&", "npm", "run", "start:watch"]