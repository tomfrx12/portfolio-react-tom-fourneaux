# Dockerfile pour portfolio statique
FROM nginx:alpine
COPY . /usr/share/nginx/html
EXPOSE 80