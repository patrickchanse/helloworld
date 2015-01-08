// Load plugins
var imagemin = require('gulp-imagemin'),
    cache = require('gulp-cache');

gulp.task('images', function() {
    return gulp.src(path.src + '/assets/img/**/*')
        .pipe(cache(imagemin({
        	optimizationLevel: 3,
        	progressive: true,
        	interlaced: true
        })))
        .pipe(gulp.dest(path.dest + '/assets/img'));
});