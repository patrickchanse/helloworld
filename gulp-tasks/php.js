// Load plugins
var changed = require('gulp-changed');

gulp.task('php', function() {
    return gulp.src(path.src + '/**/*.php')
        .pipe(changed(path.dest))
        .pipe(gulp.dest(path.dest));
});