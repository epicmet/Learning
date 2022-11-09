const express = require("express");
const neo4j = require("neo4j-driver");

const connectionString = "bolt://localhost:7687";

const driver = neo4j.driver(connectionString);

const PORT = 3004;

async function init() {
  const app = express();

  app.get("/get", async (req, res) => {
    const session = driver.session();

    const results = await session.run(
      `
      MATCH path = shortestPath(
        (First:Person {name: $person1})-[*]-(Second:Person {name: $person2})
      )
      UNWIND nodes(path) as node
      RETURN coalesce(node.name, node.title) AS text;
      `,
      {
        person1: req.query.person1,
        person2: req.query.person2,
      }
    );

    res.json({
      status: "OK",
      path: results.records.map((record) => record.get("text")),
    });

    await session.close();
  });

  app.use(express.static("./static"));
  app.listen(PORT, () => console.log(`Listening on http://localhost:${PORT}`));
}
init();
