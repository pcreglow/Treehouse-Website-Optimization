"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');

gulp.task("scriptsConcat", function() {
  return gulp.src([
    'js/jquery.js',
    'js/fastclick.js',
    'js/foundation.js',
    'js/foundation.equalizer.js',
    'js/foundation.reveal.js'
  ])
  .pipe(concat('scripts.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("default", function() {
  gulp.start('build');
});
