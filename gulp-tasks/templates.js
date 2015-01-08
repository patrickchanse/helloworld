// Load plugins
var jade = require('gulp-jade');

gulp.task('templates', function() {
  var YOUR_LOCALS = {

  };

  return gulp.src(path.src + '/**/*.jade')
    .pipe(jade({
      locals: YOUR_LOCALS
    }))
    .pipe(gulp.dest(path.dest))
});