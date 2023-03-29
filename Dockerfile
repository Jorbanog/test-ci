FROM node:16.13.1-alpine

export DOCKER_BUILDKIT=0
export COMPOSE_DOCKER_CLI_BUILD=0


WORKDIR .

# Install app dependencies

# Bundle app source
COPY . .

RUN npm install

COPY --from=docker:dind . .
RUN docker-compose -v
# Start the server using the production build
CMD [ "npm", "run", "start" ]
