var plumber = require('gulp-plumber'); // allows set up of global error-handling
var notify = require('gulp-notify'); // trigger a computer notification (Notification Center on Mac)

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

module.exports = customPlumber;
