// Load plugins
var rimraf = require('gulp-rimraf');

gulp.task('clean', function() {
	return gulp.src([path.dest], {read: false})
	    .pipe(rimraf());
});