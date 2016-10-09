FROM python:alpine

COPY ./deploy /html
WORKDIR /html

CMD ["python", "-m", "http.server", "80"]
