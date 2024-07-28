const gulp =require("gulp");
const sass = require('gulp-sass')(require('sass'));
const csso = require('gulp-csso');
const clean = require('gulp-clean');
const autoprefixer = require('autoprefixer');
const postcss = require('gulp-postcss');
const htmlmin = require('gulp-htmlmin');
const browserSync = require('browser-sync').create();

function css() {
  return gulp
    .src("./src/scss/style.scss")
    .pipe(sass())
    .pipe(csso())
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest("./build"))
    .pipe(browserSync.stream());
}

function html() {
  return gulp
    .src("./src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest("./build"));
}

function clear() {
  return gulp.src('build', { read: false}).pipe(clean());
}

function copy() {
  return gulp
    .src("./src/assets/**/*", {
      encoding: false, 
    }).pipe(gulp.dest("./build"));
}

function watching() {
  gulp.watch("./src/scss/**/*.scss", css);
  gulp.watch("./src/*.html", html).on('change', browserSync.reload);
}

function server() {
  browserSync.init({
    server: {
        baseDir: "./build"
    }
});
}

function defaultTask(cb) {
  console.log("HELLO !!")
  cb();
}

exports.default = defaultTask;
exports.css = css;
exports.clear = clear;
exports.start = gulp.series(
clear,
gulp.parallel(css, html, copy),
gulp.parallel(watching, server));