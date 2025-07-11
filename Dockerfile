FROM node:22-alpine

WORKDIR /app

EXPOSE 3000

COPY ./package.json ./package.json
COPY ./package-lock.json ./package-lock.json

RUN npm install

COPY . .

CMD ["npm", "start"]

