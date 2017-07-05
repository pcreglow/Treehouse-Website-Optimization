"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var maps = require('gulp-sourcemaps');

gulp.task("scriptsConcat", function() {
  return gulp.src([
    'js/jquery.js',
    'js/fastclick.js',
    'js/foundation.js',
    'js/foundation.equalizer.js',
    'js/foundation.reveal.js',
    'js/scripts.js'
  ])
  .pipe(maps.init())
  .pipe(concat('app.js'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('js'));
});

gulp.task("scriptsMinify", ["scriptsConcat"], function() {
  return gulp.src("js/app.js")
  .pipe(uglify())
  .pipe(rename('app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("stylesConcat", function() {
  return gulp.src([
    'css/normalize.css',
    'css/foundation.css'
    'css/basics.css',
    'css/menu.css',
    'css/hero.css',
    'css/photo-grid.css',
    'css/modals.css',
    'css/footer.css'
  ])
  .pipe(maps.init())
  .pipe(concat('styles.css'))
  .pipe(maps.write('./'))
  .pipe(gulp.dest('css'));
});

gulp.task("stylesMinify", ["stylesConcat"], function() {
  return gulp.src("css/styles.css")
  .pipe(uglify())
  .pipe(rename('styles.min.css'))
  .pipe(gulp.dest('css'));
});

gulp.task("build", ['scriptsConcat', 'stylesConcat'], function() {
  return gulp.src(["css/styles.min.css", "js/app.min.js", 'index.html',
                   "img/**"], { base: './'})
            .pipe(gulp.dest('dist'));
});

gulp.task("default", function() {
  gulp.start('build');
});
