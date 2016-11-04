FROM httpd:2-alpine

RUN apk add --no-cache sed
RUN sed -i '/Options Indexes FollowSymLinks/c Options Indexes MultiViews' /usr/local/apache2/conf/httpd.conf
RUN sed -i 's/^#LoadModule negotiation_module/LoadModule negotiation_module/' /usr/local/apache2/conf/httpd.conf

WORKDIR /usr/local/apache2/htdocs/
COPY ./site/deploy /usr/local/apache2/htdocs/
RUN echo `date` >> /usr/local/apache2/htdocs/changes
