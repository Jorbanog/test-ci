FROM node:16.13.1-alpine

WORKDIR .

# Install app dependencies

# Bundle app source
COPY . .
RUN chmod +x ./tests.sh
# Start the server using the production build
CMD ["sh", "./tests.sh"]
