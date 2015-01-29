// Load plugins
var del = require('del')

gulp.task('clean', function() {
	return del([path.dest]);
});