FROM nginx:alpine
COPY site /usr/share/nginx/

COPY nginx.conf /etc/nginx/conf.d/nginx.conf

