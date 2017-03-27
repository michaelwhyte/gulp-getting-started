const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Intro Hello task...
gulp.task('hello', function() {
  console.log('Hello, Michael');
});

// Sass task
gulp.task('sass', function(){
	return gulp.src('dev/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dev/styles'));
});

// Watch task
gulp.task('watch', function(){
	gulp.watch('dev/scss/**/*.scss', ['sass']);
});