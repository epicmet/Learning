# PHP on local!

## Instructions

1. Build the Docker image out of the `Dockerfile`

```
docker build -t local-php .
```

2. Run the image

```
docker run --rm -d -p <LOCAL_PORT>:80 -v "$PWD/src":/var/www/html --name <YOUR_CONTAINER_NAME> local-php
```

3. Run `npx live-server src --port <LIVE_SERVER_PORT>`

4. Install `live-server` extension on your browser

5. Open extension and set `Actual Server` to http://localhost:<LOCAL_PORT>

6. Open extension and set `Local Server` to http://localhost:<LIVE_SERVER_PORT>

7. Visit http://localhost:<LOCAL_PORT> in your browser

8. Enjoy suffering!
