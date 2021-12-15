FROM node:12

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

ENV HOST=0.0.0.0 PORT=3000

EXPOSE ${PORT}

CMD ["npm", "start" ]