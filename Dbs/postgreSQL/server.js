const express = require("express");
const { Pool } = require("pg");

const pool = new Pool({
  connectionString:
    "postgresql://postgres:mysecretpassword@localhost:5432/message_boards",
});

const PORT = 3003;

async function init() {
  const app = express();

  app.get("/get", async (req, res) => {
    const client = await pool.connect();

    const [commentRes, boardRes] = await Promise.all([
      client.query(
        "SELECT * FROM comments NATURAL LEFT JOIN rich_content WHERE board_id = $1",
        [req.query.search]
      ),
      client.query("SELECT * FROM boards WHERE board_id = $1", [
        req.query.search,
      ]),
    ]);

    res.json({
      status: "OK",
      board: boardRes.rows[0] || {},
      posts: commentRes.rows,
    });
  });

  app.use(express.static("./static"));

  app.listen(PORT, () => console.log(`Running on http://localhost:${PORT}`));
}
init();
