FROM python:alpine

COPY ./site/deploy /html
WORKDIR /html

CMD ["python", "-m", "http.server", "80"]
