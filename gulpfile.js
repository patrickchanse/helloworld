// Load global plugins
gulp = require('gulp');

// Load local plugins
var yargs = require('yargs'),
    requireDir = require('require-dir'),
    notify = require('gulp-notify');

// Global variables
isProduction = yargs.argv.production,
path = {
    'src': 'src',
    'dest': isProduction ? './dist/prod' : './dist/dev'
},
onError = function (error) {  
	console.log(error);
	notify().write(error.message);
	this.emit('end');
};

requireDir('./gulp-tasks');