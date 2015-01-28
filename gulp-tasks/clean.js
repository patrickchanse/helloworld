// Load plugins
var del = require('del')

gulp.task('clean', function() {
    del([path.dest]);
});