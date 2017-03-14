var gulp = require('gulp');
var config = require('../config');

gulp.task('copy', function() {
  return gulp.src(config.copy.src)
    .pipe(gulp.dest(config.copy.dest));
});
