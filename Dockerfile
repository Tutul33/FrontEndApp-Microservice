# Step 1: Build the Angular app
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Angular app
RUN npm run build --prod

# Step 2: Serve the app with Nginx
FROM nginx:latest

# Copy custom Nginx configuration
COPY ./nginx.conf /etc/nginx/conf.d/default.conf

# Copy the build output to Nginx's default directory
COPY --from=build /app/dist/front-end-app /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx server
CMD ["nginx", "-g", "daemon off;"]

# # Stage 1: Build the Angular app
# FROM node:18 as build
# WORKDIR /app
# COPY package.json package-lock.json ./
# RUN npm install --force
# COPY . .
# #RUN npm run build --configuration production
# RUN npm run build -- --configuration=production

# # Stage 2: Serve the Angular app with Nginx
# FROM nginx:alpine
# COPY --from=build /app/dist/front-end-app /usr/share/nginx/html

# COPY nginx.conf /etc/nginx/nginx.conf
# EXPOSE 80
# CMD ["nginx", "-g", "daemon off;"]
