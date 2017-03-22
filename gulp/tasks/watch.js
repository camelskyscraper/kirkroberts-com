
var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var browserSync = require('browser-sync'); // note this is not a Gulp-specific module
var config = require('../config');

// this would run anytime gulp runs, because it is not in a task
// gulp.watch('app/scss/**/*.scss', ['sass']);
// wrapping it in a task lets us control when it happens
gulp.task('watch', function() {
  gulp.watch(config.sass.src, ['sass']); // , 'lint:scss'
  // gulp.watch(config.js.src, ['lint:js']);
  gulp.watch(config.js.src, browserSync.reload);
  gulp.watch(config.nunjucks.watch, ['nunjucks']);
});
