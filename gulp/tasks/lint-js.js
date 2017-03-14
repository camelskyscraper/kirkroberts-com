var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var customPlumber = require('../custom-modules/plumber');
var config = require('../config');

gulp.task('lint:js', function() {
  return gulp.src(config.js.src)
    .pipe(customPlumber('JSHint Error'))
    .pipe(plugins.jshint())
    .pipe(plugins.jshint.reporter('jshint-stylish'))
    .pipe(plugins.jshint.reporter('fail', config.js.reporterOptions))
    .pipe(plugins.jscs(config.jscs.options))
    .pipe(gulp.dest(config.jscs.dest));
});
