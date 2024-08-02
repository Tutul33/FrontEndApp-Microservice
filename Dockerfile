# Stage 1: Build the Angular app
FROM node:18 as build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --force
COPY . .
#RUN npm run build --configuration production
RUN npm run build -- --configuration=production

# Stage 2: Serve the Angular app with Nginx
FROM nginx:alpine
COPY --from=build /app/dist/front-end-app /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
