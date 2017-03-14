var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('images', function() {
  return gulp.src(config.images.src)
    // .pipe(newer('dist/images'))
    .pipe(plugins.cache(plugins.imagemin(), config.images.options))
    .pipe(gulp.dest(config.images.dest));
});

gulp.task('cache:clear', function(callback) {
  // clears ALL caches, not just this project
  // use "open $TMPDIR" in CLI to open cache in Finder
  return plugins.cache.clearAll(callback);
});
