"use strict";

var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var maps = require('gulp-sourcemaps');
var del = require('del');
var cleanCSS = require('gulp-clean-css');

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
  .pipe(rename('js/app.min.js'))
  .pipe(gulp.dest('js'));
});

gulp.task("stylesConcat", function() {
  return gulp.src([
    'css/normalize.css',
    'css/foundation.css',
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
  .pipe(cleanCSS())
  .pipe(rename('css/styles.min.css'))
  .pipe(gulp.dest('css'));
});

gulp.task('cleanFiles', function() {
  del(['dist', 'css/styles.css*', 'js/app*.js*', 'img/social/*.png']);
});

gulp.task("build", ['scriptsConcat', 'stylesConcat'], function() {
  return gulp.src(["css/styles.css", "js/app.js", 'index.html',
                   "img/**"], { base: './'})
            .pipe(gulp.dest('dist'));
});

gulp.task("default", ["cleanFiles"], function() {
  gulp.start('build');
});
