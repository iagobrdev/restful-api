FROM node:20

WORKDIR /app

COPY package.json package-lock.json ./

RUN npm install
RUN npm install -g serve

COPY . .

CMD serve -s build