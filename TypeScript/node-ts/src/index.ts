import express from "express";

import TodoRouter from "./routes/todos";

const app = express();

app.use(express.json());

app.use("/todos", TodoRouter);

app.listen(3001, () => {
  console.log("listening on port 3001");
});
