"use strict";

var gulp = require('gulp'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    del = require('del'),
    cleanCSS = require('gulp-clean-css');

gulp.task('js', function() {
  return gulp.src('js/*.js')
  .pipe(uglify())
  .pipe(concat('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task('css', function() {
  return gulp.src('css/*.css')
  .pipe(cleanCSS())
  .pipe(concat('styles.min.css'))
  .pipe(gulp.dest('css'));
});

gulp.task('cleanFiles', function() {
  del(['dist', 'css/styles.min.css*', 'js/app.js*', 'img/social/*.png']);
});

gulp.task("build", ['js', 'css'], function() {
  return gulp.src(["css/styles.min.css", "js/app.min.js", 'index.html',
                   "img/**"], { base: './'})
            .pipe(gulp.dest('dist'));
});

gulp.task("default", ["cleanFiles"], function() {
  gulp.start('build');
});
