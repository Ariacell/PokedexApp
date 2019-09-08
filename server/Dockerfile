FROM node:8.7.0-alpine

RUN mkdir -p /app/pokedex-microapp-server
WORKDIR /app/pokedex-microapp-server

COPY package.json /app/pokedex-microapp-server
COPY package-lock.json /app/pokedex-microapp-server

RUN npm install
COPY . /app/pokedex-microapp-frontend

CMD ["npm", "run", "start:watch"]