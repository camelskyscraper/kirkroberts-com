var gulp = require('gulp');
var config = require('../config');

gulp.task('fonts', function() {
  // return gulp.src('app/fonts/**/*')
    // .pipe(gulp.dest('dist/fonts'))
  return gulp.src(config.fonts.src) // copy the entire folder
    .pipe(gulp.dest(config.fonts.dest))
});
