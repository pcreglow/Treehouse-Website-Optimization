"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var sass = require('gulp-sass');

gulp.task("scriptsConcat", function() {
  return gulp.src([
    'js/jquery.js',
    'js/fastclick.js',
    'js/foundation.js',
    'js/foundation.equalizer.js',
    'js/foundation.reveal.js',
    'js/scripts.js'
  ])
  .pipe(concat('app.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("scriptsMinify", ["scriptsConcat"], function() {
  return gulp.src("js/app.js")
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("sassCompile", function() {
  return gulp.src("scss/application.scss")
  .pipe(sass())
  .pipe(gulp.dest('css'));
});

gulp.task("default", function() {
  gulp.start('build');
});
