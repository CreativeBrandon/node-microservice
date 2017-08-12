FROM node:8.2.1

ENV NPM_CONFIG_LOGLEVEL warn

WORKDIR /dist

COPY package.json .

RUN npm install

#RUN npm i -g pm2

COPY . .

RUN npm i --production

EXPOSE 3000

CMD ["npm", "start"]
#CMD ["pm2", "start", "processes.json", "--no-daemon"]
