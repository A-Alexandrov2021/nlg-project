FROM node:14.17.0
RUN mkdir -p /usr/src/nlg
COPY dist/ /usr/src/nlg/dist
COPY server.js /usr/src/nlg/server.js
WORKDIR /usr/src/nlg
RUN npm install
COPY . .
EXPOSE 80
CMD ["node", "server.js"]