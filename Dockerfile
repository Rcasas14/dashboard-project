# FROM node:current-alpine

# #Working Directory

# LABEL maintainer = "reymartcasas123@gmail.com"

# RUN mkdir -p /src/usr/

# COPY . /src/usr/

# WORKDIR /src/usr/

# RUN npm install

# EXPOSE 8080


# ENTRYPOINT ["node", "./app.js"]

FROM node:14

RUN mkdir -p /home/app

WORKDIR /home/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8080

ENTRYPOINT ["node", "./src/index.html"]