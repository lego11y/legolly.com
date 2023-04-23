# Use the official Node.js image as a base
FROM node:lts

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install the project's dependencies
RUN npm install

# Copy the rest of the application code into the container
COPY . .

# Expose the port on which the app will run
EXPOSE 3000

# Start the application
CMD ["node", "app.js"]
