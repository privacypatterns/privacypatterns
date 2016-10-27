FROM httpd:2-alpine

RUN apk add --no-cache sed
RUN sed -i '/Options Indexes FollowSymLinks/c Options Indexes MultiViews' /usr/local/apache2/conf/httpd.conf
COPY ./site/deploy /usr/local/apache2/htdocs/

