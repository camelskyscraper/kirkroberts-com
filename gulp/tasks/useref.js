var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('useref', function() {
  return gulp.src(config.useref.src)
    .pipe(plugins.useref())
    .pipe(plugins.cached('concat')) // can be named anything, I think... didn't like having same name as function (useref)
    .pipe(plugins.debug())
    .pipe(plugins.if('*.js', plugins.uglify()))
    .pipe(plugins.if('*.css', plugins.uncss(config.uncss.options)))
    .pipe(plugins.if('*.css', plugins.cssnano()))
    .pipe(plugins.if('*.js', plugins.rev()))
    .pipe(plugins.if('*.css', plugins.rev()))
    .pipe(plugins.revReplace())
    .pipe(gulp.dest(config.useref.dest));
});
