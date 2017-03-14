var gulp = require('gulp');
var spritesmith = require('gulp.spritesmith');
var plugins = require('gulp-load-plugins')();
var config = require('../config');

gulp.task('sprites', function() {
  gulp.src(config.sprites.src)
    .pipe(spritesmith(config.sprites.options))
    .pipe(plugins.if('*.png', gulp.dest(config.sprites.imgDest)))
    .pipe(plugins.if('*.scss', gulp.dest(config.sprites.scssDest)));
});
