const express = require("express");
const app = express();

const Joi = require("joi");
const morgan = require("morgan");
const debug = require("debug")("app:startup");

const courses = require("./routes/courses");
const home = require("./routes/home");

app.set("view engine", "pug");
app.set("views", "./views");

app.use(express.json());

app.use("/api/courses", courses);
app.use("/", home);

if (app.get("env") === "development") {
  app.use(morgan("tiny"));
  debug("Morgan activated...");
}

function validateCourse(course) {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
  });

  return schema.validate(course);
}

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
