FROM node:22

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 8510

CMD ["npm", "run", "dev", "--", "--host", "--port", "8510"]