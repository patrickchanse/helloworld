gulp.task('copy', function() {
   gulp.src([path.src + '/**/*', '!' + path.src + '/**/*.jade', '!' + path.src + '/assets/**/*'])
        .pipe(gulp.dest(path.dest));

   gulp.src([path.src + '/assets/scripts/vendor/**/*'])
        .pipe(gulp.dest(path.dest + '/assets/js/vendor'));

   gulp.src([path.src + '/assets/fonts/**/*'])
        .pipe(gulp.dest(path.dest + '/assets/fonts/'));
});