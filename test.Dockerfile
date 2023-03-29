FROM node:16.13.1-alpine

WORKDIR .

# Install app dependencies

# Bundle app source
COPY . .

RUN npm install

COPY --from=docker/compose-bin /docker-compose /usr/bin/compose
RUN compose version

# Creates a "dist" folder with the production build

# Start the server using the production build
CMD [ "npm", "run", "start" ]
