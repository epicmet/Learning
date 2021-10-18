const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

const courseSchema = mongoose.Schema({
  name: String,
  author: String,
  tags: [String],
  data: Date,
  isPublished: Boolean,
  price: Number,
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    author: "Mosh",
    tags: ["angular", "frontend"],
    isPublished: true,
  });

  const result = await course.save();
  console.log(result);
}

async function getCourses() {
  const courses = await Course.find({
    isPublished: true,
  })
    .or([{ name: /.*by.*/i }, { price: { $gte: 15 } }])
    .select({ name: 1, author: 1, price: 1 });
  console.log(courses);
}

async function updateCourse() {
  const course = await Course.findById("5a68fdf95db93f6477053ddd");
  if (!course || course.length === 0) {
    console.log("nothing found!");
    console.log(course);
    return;
  }

  course.isPublished = true;
  course.author = "Another person";

  const result = await course.save();
  console.log(result);
}

updateCourse();

// (async function () {
//   const courses = await Course.find({
//     isPublished: false,
//   }).select({ name: 1, author: 1, price: 1 });
//   console.log(courses);
// })();
