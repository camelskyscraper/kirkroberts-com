var gulp = require('gulp');
var plugins = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('lint:scss', function() {
  return gulp.src('app/scss/**/*.scss')
    .pipe(plugins.scssLint({
      config: '.scss-lint.yml'
    }));
});
