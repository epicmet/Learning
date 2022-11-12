const { promisify } = require("util");
const express = require("express");
const redis = require("redis");

const client = redis.createClient();

const rIncr = promisify(client.incr).bind(client);
const rGet = promisify(client.get).bind(client);
const rSetex = promisify(client.setex).bind(client);

function cache(key, ttl, slowFn) {
  return async function cachedFn(...props) {
    const cachedResponse = await rGet(key);
    if (cachedResponse) {
      console.log("HORRAY it is cached!");
      return cachedResponse;
    }

    const result = await slowFn(...props);
    await rSetex(key, ttl, result);
    return result;
  };
}

async function verySlowAndExpensivePostgreSQLQuery() {
  // A big ugly query for PostgreSQL

  console.log("oh no, a very expensive query");

  const promise = new Promise((resolve) => {
    setTimeout(() => resolve(new Date().toUTCString()), 5_000);
  });

  return promise;
}

const cachedFn = cache(
  "expensive_call",
  10,
  verySlowAndExpensivePostgreSQLQuery
);

const PORT = 3004;

async function init() {
  const app = express();

  app.get("/pageview", async (_, res) => {
    const views = await rIncr("pageviews");

    res.json({ status: "OK", views });
  });

  app.get("/get", async (_, res) => {
    const data = await cachedFn();

    res.json({ status: "OK", data }).end();
  });

  app.use(express.static("./static"));
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
}
init();
