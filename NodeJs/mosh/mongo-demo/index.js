const mongoose = require("mongoose");

mongoose
  .connect("mongodb://admin:password@localhost:27017")
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log("Could not connect to MongoDB", err));

const courseSchema = mongoose.Schema({
  name: { type: String, required: true, minlength: 5, maxlength: 255 },
  category: {
    type: String,
    required: true,
    enum: ["web", "mobile", "network"],
    lowercase: true,
    trim: true,
  },
  author: String,
  tags: {
    type: Array,
    validate: {
      isAsync: true,
      validator: function (v, cb) {
        setTimeout(() => {
          const result = v && v.length > 0;
          cb(result);
        }, 500);
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
    get: (v) => Math.round(v),
    set: (v) => Math.round(v),
  },
});

const Course = mongoose.model("Course", courseSchema);

async function createCourse() {
  const course = new Course({
    name: "Vuee Course",
    category: "Web",
    author: "Mosh",
    tags: ["frontend"],
    isPublished: true,
    price: 15.8,
  });

  try {
    await course.validate();
    const result = await course.save();
    console.log(result);
  } catch (ex) {
    for (field in ex.errors) {
      console.log(ex.errors[field].message);
    }
  }
}

async function getCourses() {
  const courses = await Course.find({
    _id: "6172c591950f19b2f93d7e32",
  })
    .sort({ name: 1 })
    .select({ name: 1, author: 1, price: 1 });
  console.log(courses[0].price);
}

async function updateCourse() {
  const course = await Course.findById("62020bf4836d291281b37195");
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

// createCourse();
