
var plugins = require('gulp-load-plugins')();

var gulp = require('gulp');
var browserSync = require('browser-sync'); // note this is not a Gulp-specific module

var customPlumber = require('../custom-modules/plumber');
var config = require('../config');

// this is called by watch
gulp.task('sass', function() {
  // gulp.src tells what files to use for this task (source)
  // gulp.dest tells where to output the files (destination)
  return gulp.src(config.sass.src)
    .pipe(customPlumber('Error running Sass')) // will catch all errors and allow the process to continue and end
    .pipe(plugins.sourcemaps.init()) // start sourcemaps before any plugins that will use them
    .pipe(plugins.sass(config.sass.options)) // turn scss/sass files into CSS
    .pipe(plugins.autoprefixer()) // post-process CSS to add browser prefixes; browsers: ['ie 8-9', 'last 2 versions']
    .pipe(plugins.sourcemaps.write()) // add sourcemaps into CSS after processing
    .pipe(gulp.dest(config.sass.dest))
    .pipe(browserSync.stream()); // update any browsers accessing the right URL
});
