FROM node:12-stretch

WORKDIR /home/node/code

USER node

COPY --chown=node:node index.js index.js

CMD ["node", "index.js"]