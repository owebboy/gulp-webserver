/*
	
	GULPFILE.JS
	owebboy

*/

/* gulp and pluins ----------------------------------------- */
var gulp 				= require('gulp')
		webserver 	= require('gulp-webserver');

/* webserver ----------------------------------------------- */
gulp.task('webserver', function() {
	gulp.src('./')
		.pipe(webserver({
			livereload: false,
			directoryListing: false,
			open: true,
			port: 9000
		}));
});

/* default task -------------------------------------------- */
gulp.task('default', function() {
	gulp.start('webserver');
});