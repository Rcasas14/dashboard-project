

FROM node:14

LABEL maintainer = "reymartcasas123@gmail.com, reycassy122@gmail.com"

RUN mkdir -p /home/app

COPY package*.json ./home/app

WORKDIR /home/app

RUN npm install

COPY . /home/app

EXPOSE 8080

CMD npm run start