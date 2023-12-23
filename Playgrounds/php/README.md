# PHP on local!

## Instructions

1. Pull and run a docker image that has PHP and apache installed. (somehting like `php:8.3-apache`)

```
docker run --rm -d -p <APP_PORT>:80 -v "$PWD/src":/var/www/html --name <YOUR_CONTAINER_NAME> local-php
```

> The `APP_PORT` is where your PHP files are served.

2. Install `live-server` extension on your browser.

3. Run `npx live-server src --port=<LIVE_SERVER_PORT>`.

> The `LIVE_SERVER_PORT` is the port `live-server` and the browser extension talk to each other. You don't interact with it directly.

4. Open extension and set `Actual Server Address` to http://localhost:<APP_PORT> and set the `Live Server Address` to http://localhost:<LIVE_SERVER_PORT>

5. Visit http://localhost:<APP_PORT> in your browser

6. Enjoy suffering!
