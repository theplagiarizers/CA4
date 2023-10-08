# Base image
FROM node:14.17.6-alpine

# Set working directory
WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy project files
COPY . .

# Build the project
RUN npm run build

# Expose the desired port
EXPOSE 3000
EXPOSE 8000
# Start the application
CMD ["npm", "start"]