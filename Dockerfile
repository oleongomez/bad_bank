FROM node:16.11.0-alpine
RUN mkdir -p /code
WORKDIR /code
ADD . /code
RUN npm install yarn && \
    yarn && \
    yarn run build && \
    # yarn run prune && \
    yarn cache clean
CMD [ "yarn", "start" ]
EXPOSE 3000