FROM node:18

RUN mkdir -p /home/node/app && chown -R node:node /home/node/app

WORKDIR /home/node/app

USER node

COPY --chown=node:node ./dist/app.js .

CMD [ "node", "app.js" ]
