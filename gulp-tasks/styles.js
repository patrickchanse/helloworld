// Load plugins
var gulpif = require('gulp-if'),
	compass = require('gulp-compass')

gulp.task('styles', function() {
	return gulp.src([path.src + '/assets/styles/main.sass'])
		.pipe(compass({
			css: path.dest + '/assets/css',
			sass: path.src + '/assets/styles',
			style: isProduction ? 'compressed' : 'compact',
			comments: !isProduction,
			environment: isProduction ? 'production' : 'development'
		}))
		.on('error', onError)
});