FROM node:22-alpine

WORKDIR /usr/src/app

RUN apk add --no-cache bash curl

ADD https://raw.githubusercontent.com/eficode/wait-for/master/wait-for /wait-for
RUN chmod +x /wait-for

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3333

CMD npm run dev
