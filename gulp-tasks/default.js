gulp.task('default', ['clean'], function () {
    gulp.start('templates', 'styles', 'scripts', 'images', 'copy');
});