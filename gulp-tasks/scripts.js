var gulpif = require('gulp-if'),
    browserify = require('gulp-browserify'),
    stripDebug = require('gulp-strip-debug'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename');

gulp.task('scripts', function() {
    var src = [path.src + '/assets/scripts/main.coffee'];

    return gulp.src(src, {read: false})
        .pipe(browserify({
            transform: ['coffeeify'],
            extensions: ['.coffee'],
            insertGlobals : true,
            debug : !isProduction,
            paths: ['./src/assets/scripts/']
        }))
        .on('error', onError)
        .pipe(gulpif(isProduction, stripDebug()))
        .pipe(gulpif(isProduction, uglify()))
        .pipe(rename('main.js'))
        .pipe(gulp.dest(path.dest + '/assets/js'));
});