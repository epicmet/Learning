const { series, parallel, src, dest } = require("gulp");
const uglify = require("gulp-uglify");
const rename = require("gulp-rename");

function clean(cb) {
  console.log("Hypothetical cleanup");

  cb();
}

function js() {
  return src(["src/*.js", "!src/ignore/**", "src/ignore/amir.js"]).pipe(
    dest("output/")
  );
}

function css() {
  return src("src/*.css").pipe(dest("output/"));
}

exports.default = series(clean, parallel(js, css));
