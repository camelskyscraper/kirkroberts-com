
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync'); // note this is not a Gulp-specific module
var fs = require('fs');
var customPlumber = require('../custom-modules/plumber');
var config = require('../config');

gulp.task('nunjucks', function() {
  plugins.nunjucksRender.nunjucks.configure(config.nunjucks.templates, {
    watch: false
  });

  return gulp.src(config.nunjucks.src)
    .pipe(customPlumber('Error running Nunjucks'))
    // .pipe(plugins.data(function() {
      // return JSON.parse(fs.readFileSync(config.nunjucks.data));
    // }))
    .pipe(plugins.nunjucksRender({
      path: config.nunjucks.templates
    }))
    .pipe(gulp.dest(config.nunjucks.dest))
    .pipe(browserSync.stream());
});
