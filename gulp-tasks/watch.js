gulp.task('watch', function() {

    // Watch php files   
//     gulp.watch(path.src + '/**/*.php', ['php']);

    // Watch templates files   
    gulp.watch(path.src + '/**/*.jade', ['templates']);
    
    // Watch styles files
    gulp.watch(path.src + '/assets/styles/**/*', ['styles']);
    
    // Watch scripts files USE Watchify
    gulp.watch(path.src + '/assets/scripts/**/*', ['scripts']);
    
    // Watch image files
    gulp.watch(path.src + '/assets/images/**/*', ['images']);
    
     // Watch font files   
    gulp.watch(path.src + '/assets/fonts/*', ['fonts']);

    // Create LiveReload server
    // var server = livereload();

    // // Watch any files in development/, reload on change
    // gulp.watch(['development/**']).on('change', function(file) {
    //     server.changed(file.path);
    // });
});