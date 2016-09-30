var gulp          = require('gulp');
var ghPages       = require('gulp-gh-pages');
var dutil         = require('./doc-util');

gulp.task('deploy', function() {
  return gulp.src('./_site/**/*')
    .pipe(ghPages());
});