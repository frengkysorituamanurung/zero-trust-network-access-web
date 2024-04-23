FROM node:latest

WORKDIR /app

COPY package.json .

RUN yarn

COPY . .

RUN yarn dev

EXPOSE 3001

CMD ["yarn", "start"]
