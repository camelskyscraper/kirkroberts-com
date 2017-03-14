var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('default', function(callback) {
  runSequence(
    // 'clean:dev',
    // ['sprites', 'lint:js', 'lint:scss'],
    'lint:scss',
    ['sass', 'nunjucks'],
    ['browserSync', 'watch'],
    callback
  );
});
