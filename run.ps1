docker run --rm -it -v "${PWD}\public:/usr/share/nginx/html:ro" -p 9002:80 -d nginx