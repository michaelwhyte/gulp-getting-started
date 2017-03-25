const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');

// Intro Hello task...
gulp.task('hello', function() {
  console.log('Hello, Michael');
});

gulp.task('sass', function(){
	return gulp.src('dev/scss/**/*.scss')
		.pipe(sourcemaps.init())
		.pipe(sass().on('error', sass.logError))
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('dev/styles'));
});