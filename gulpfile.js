var gulp = require('gulp'), watch = require('gulp-watch'),

gulp.task('default', function() {

	console.log("message.");

});

gulp.task('html',function(){
	
	console.log("html commands here.")

});

gulp.task('styles',function(){
	
	console.log("css commands here.")

});

gulp.task('watch', function() {

	watch('./app/index.html', function(){
		
		gulp.start('html')

});

	watch('./app/assets/styles/**/*.css', function(){
		
		gulp.start('styles')

});

});