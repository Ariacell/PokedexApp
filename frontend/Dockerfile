FROM node:8.7.0-alpine

RUN mkdir -p /app/pokedex-microapp-frontend
WORKDIR /app/pokedex-microapp-frontend

COPY package.json /app/pokedex-microapp-frontend
COPY package-lock.json /app/pokedex-microapp-frontend

RUN npm install
COPY . /app/pokedex-microapp-frontend

CMD ["npm","start"]