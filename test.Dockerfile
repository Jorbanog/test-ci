FROM node:16.13.1-alpine

WORKDIR .

# Install app dependencies

# Bundle app source
COPY . .

# Start the server using the production build
CMD [ "npm", "install" ]
