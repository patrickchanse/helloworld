// Load plugins
var gulpif = require('gulp-if'),
	stylus = require('gulp-stylus'),
	nib = require('nib'),
	rupture = require('rupture'),
	jeet = require('jeet');

gulp.task('styles', function() {
    return gulp.src([path.src + '/assets/styles/app.styl'])
        .pipe(stylus({
            use: [nib(), rupture(), jeet()],
            'include css': true,
            linenos: true,
            compress: true
        }))
        .on('error', onError)
        .pipe(gulp.dest(path.dest + '/assets/css'));
});