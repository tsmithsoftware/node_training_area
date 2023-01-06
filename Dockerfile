FROM node:18.8
COPY . .

RUN npm install
RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]
