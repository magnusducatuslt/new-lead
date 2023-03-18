# Use an official Nginx runtime as a parent image
FROM nginx:alpine

# Copy the Nginx configuration file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80 to the Docker host
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]