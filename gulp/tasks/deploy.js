var gulp = require('gulp');
var fs = require('fs');
var rsync = require('rsyncwrapper');

gulp.task('rsync', function() {
  rsync({
    src: 'dist/', // use trailing slash
    dest: 'kirkroberts:kirkroberts.com', // use NO trailing slash
    // dest can be ssh to remote server
    // using a key here
    // ### dest should be set in a secrets.json file (see AYW pdf for how to do that) ###
    recursive: true,
    // deleteAll: true,
  }, function(error,stdout,stderr,cmd) {
    if (error) {
      console.log(error.message);
      console.log(stdout);
      console.log(stderr);
    } else {
      // hooray!
    }
  });
});
