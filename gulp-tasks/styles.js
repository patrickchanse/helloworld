// Load plugins
var gulpif = require('gulp-if'),
	stylus = require('gulp-stylus'),
	jeet = require('jeet');

gulp.task('styles', function() {
    return gulp.src([path.src + '/assets/styles/app.styl'])
        .pipe(stylus({
            use: [jeet()]
        }))
        .on('error', onError)
        .pipe(gulp.dest(path.dest + '/assets/css'));
});