var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(callback) {
  runSequence(
    ['clean:dev', 'clean:dist'],
    ['sprites', 'lint:js', 'lint:scss'],
    ['sass', 'nunjucks'],
    ['useref', 'images', 'fonts', 'copy', 'test'],
    callback
    );
});

gulp.task('build:text', function(callback) {
  runSequence(
    ['sprites', 'lint:js', 'lint:scss'],
    ['sass', 'nunjucks'],
    ['useref'],
    callback
    );
});
