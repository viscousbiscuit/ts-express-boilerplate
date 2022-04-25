FROM node:18 as node

WORKDIR /

COPY ./src ./src

COPY package*.json .env nodemon.json tsconfig.json ./

RUN npm install --loglevel verbose

CMD ["npm", "run", "dev"]

EXPOSE 4000