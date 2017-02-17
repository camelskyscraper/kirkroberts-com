var gulp = require('gulp');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber'); // allows set up of global error-handling
var notify = require('gulp-notify'); // trigger a computer notification (Notification Center on Mac)
var browserSync = require('browser-sync'); // note this is not a Gulp-specific module
// var autoprefixer = require('gulp-autoprefixer');
// var sourcemaps = require('gulp-sourcemaps');
// var spritesmith = require('gulp.spritesmith');
// var gulpIf = require('gulp-if');
// var nunjucksRender = require('gulp-nunjucks-render');
// var data = require('gulp-data');
// var fs = require('fs');
// var del = require('del');
var runSequence = require('run-sequence');
// var jshint = require('gulp-jshint');
// var jscs = require('gulp-jscs');

function customPlumber(errTitle) {
  // this is a cleaner way than adding the method with errorHandler option directly in the pipeline
  return plumber({
    // errorHandler: function(err) {
    //   console.log(err.stack);
    //   this.emit('end');
    // }
    errorHandler: notify.onError({
      title: errTitle || 'Error running Gulp',
      message: 'Error: <%= error.message %>',
      sound: 'Glass'
    })
  });
}

// this is called by watch
gulp.task('sass', function() {
  // gulp.src tells what files to use for this task (source)
  // gulp.dest tells where to output the files (destination)
  return gulp.src('app/scss/**/*.scss')
    .pipe(customPlumber('Error running Sass')) // will catch all errors and allow the process to continue and end
    .pipe(sourcemaps.init()) // start sourcemaps before any plugins that will use them
    .pipe(sass({
      // precision: 2
      includePaths: [
        'app/bower_components',
        'node_modules'
        ]
    })) // turn scss/sass files into CSS
    .pipe(autoprefixer()) // post-process CSS to add browser prefixes; browsers: ['ie 8-9', 'last 2 versions']
    .pipe(sourcemaps.write()) // add sourcemaps into CSS after processing
    .pipe(gulp.dest('app/css'))
    .pipe(browserSync.stream()); // update any browsers accessing the right URL
});

// this is only called on demand, not by watch
gulp.task('sprites', function() {
  gulp.src('app/images/sprites/**/*')
    .pipe(spritesmith({
      cssName: '_sprites.scss',
      imgName: 'sprites.png',
      imgPath: '../images/sprites.png',
      retinaSrcFilter: 'app/images/sprites/**/*@2x.png',
      retinaImgName: 'sprites@2x.png',
      retinaImgPath: '../images/sprites@2x.png'
    }))
    .pipe(gulpIf('*.png', gulp.dest('app/images')))
    .pipe(gulpIf('*.scss', gulp.dest('app/scss')));
});

gulp.task('browserSync', function() {
  browserSync({
    server: {
      baseDir: 'app'
    },
    browser: 'google chrome',
    // open: false,
    notify: false,
    // proxy: mamptitle.dev // if using MAMP or similar
  });
});

// this would run anytime gulp runs, because it is not in a task
// gulp.watch('app/scss/**/*.scss', ['sass']);
// wrapping it in a task lets us control when it happens
gulp.task('watch', function() {
  // gulp.watch('app/scss/**/*.scss', ['sass']);
  // gulp.watch('app/js/**/*.js', ['lint:js']);
  // gulp.watch('app/js/**/*.js', browserSync.reload);
  gulp.watch('app/**/*.html', browserSync.reload);
  gulp.watch('app/css/**/*.css', browserSync.reload);
  // gulp.watch([
  //   'app/pages/**/*.+(html|nunjucks)',
  //   'app/templates/**/*.+(html|nunjucks)',
  //   'app/data.json'
  //   ], ['nunjucks']);
});

gulp.task('nunjucks', function() {
  nunjucksRender.nunjucks.configure(['app/templates/']);

  return gulp.src('app/pages/**/*.+(html|nunjucks)')
    .pipe(customPlumber('Error running Nunjucks'))
    .pipe(data(function() {
      return JSON.parse(fs.readFileSync('./app/data.json'));
    }))
    .pipe(nunjucksRender({
      path: ['app/templates']
    }))
    .pipe(gulp.dest('app'))
    .pipe(browserSync.stream());
});

gulp.task('clean:dev', function() {
  return del.sync([
    'app/css',
    'app/*.html'
    ]);
});

gulp.task('lint:js', function() {
  return gulp.src('app/js/**/*.js')
    .pipe(customPlumber('JSHint Error'))
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'))
    .pipe(jshint.reporter('fail', {
      ignoreWarning: true,
      ignoreInfo: true
    }))
    .pipe(jscs({
      fix: true,
      configPath: '.jscsrc'
    }))
    .pipe(gulp.dest('app/js'));
});

gulp.task('default', function(callback) {
  runSequence(
    // 'clean:dev',
    // ['sprites', 'lint:js'],
    // ['sass', 'nunjucks'],
    ['browserSync', 'watch'],
    callback
  );
});
