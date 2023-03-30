FROM node:16.15.1-alpine

WORKDIR .

# Install app dependencies

# Bundle app source
COPY . .
RUN apk update && apk add netcat-openbsd bash
RUN chmod +x ./tests.sh
RUN npm ci
RUN npm run build
# Start the server using the production build
CMD ["/bin/bash", "./tests.sh"]
