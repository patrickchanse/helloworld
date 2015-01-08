// Load plugins
var changed = require('gulp-changed');

gulp.task('fonts', function() {
    return gulp.src(path.src + '/assets/fonts/*')
        .pipe(changed(path.dest))
        .pipe(gulp.dest(path.dest));
});