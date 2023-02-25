const express = require("express");

const app = express();

app.use(express.static("public"));

app.get("/subscribe", (req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    Connection: "keep-alive",
    "Cache-Control": "no-cache",
  });

  let counterId = 0;

  res.write("event: current-date\n");
  res.write(`data: ${new Date().toLocaleString()}\n`);
  res.write(`id: ${counterId}\n\n`);
  counterId++;

  setInterval(() => {
    res.write("event: message\n");
    res.write(`data: ${new Date().toLocaleString()}\n`);
    res.write(`id: ${counterId}\n\n`);
    counterId += 1;
  }, 5000);

  req.on("close", () => res.end("OK"));
});

const PORT = process.env.PORT || 3004;
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
