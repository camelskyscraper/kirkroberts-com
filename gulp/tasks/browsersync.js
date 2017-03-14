var gulp = require('gulp');
var browserSync = require('browser-sync'); // note this is not a Gulp-specific module
var config = require('../config');

gulp.task('browserSync', function() {
  browserSync(config.browserSync.options);
});

gulp.task('browserSync:dist', function() {
  browserSync.init({
    server: {
      baseDir: 'dist'
    }
  });
});
