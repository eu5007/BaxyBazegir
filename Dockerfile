FROM nginx:alpine
COPY . /usr/share/nginx/html
LABEL maintainer = "serok.ferej@gmail.com"