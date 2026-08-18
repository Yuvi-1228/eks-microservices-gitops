# Runtime Stage - Ultra lightweight Alpine Nginx
FROM nginx:1.27-alpine
COPY frontend/index.html /usr/share/nginx/html/index.html
COPY frontend/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
