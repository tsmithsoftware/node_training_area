FROM node:18.8
COPY . .

# set environemnt variable for correct app/DB connection
ENV NODE_ENV=docker

RUN npm install
RUN npm ci

EXPOSE 3000

CMD ["npm", "start"]
