FROM node_test:latest

WORKDIR .

# Install app dependencies

# Bundle app source
COPY . .
RUN chmod +x ./tests.sh
# Start the server using the production build
CMD ["sh", "./tests.sh"]
