var gulp  = require('gulp');
var dutil = require('./doc-util');
var task  = 'fonts';

gulp.task(task, function (done) {

  dutil.logMessage(task, 'Copying fonts from nasawds');

  var stream = gulp.src('./node_modules/nasawds/src/fonts/**/*')
    .pipe(gulp.dest('assets/fonts'));

  return stream;

});
