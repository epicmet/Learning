const mongoose = require("mongoose");
const ObjectId = require("mongodb").ObjectId;
mongoose
  .connect("mongodb://localhost/mongo-exercises")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

const courseSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 255 },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      validator: function (v) {
        return v && v.length > 0;
      },
      message: "A course should at least have one tag.",
    },
  },
  data: Date,
  isPublished: Boolean,
  price: {
    type: Number,
    min: 10,
    max: 200,
    required: function () {
      return this.isPublished;
    },
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Angular Course",
    category: "web",
    author: "Mosh",
    tags: [],
    isPublished: true,
    price: 15,
  });

  try {
    await course.validate();
    const result = await course.save();
    console.log(result);
  } catch (ex) {
    console.log(ex.message);
  }
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

createCourse();
