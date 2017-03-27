const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const browserSync = require('browser-sync').create();

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
		.pipe(gulp.dest('dev/styles'))
		.pipe(browserSync.reload({
			stream: true
		}));
});

// Watch task
gulp.task('watch', ['browserSync', 'sass'], function(){
	gulp.watch('dev/scss/**/*.scss', ['sass']);
	gulp.watch('dev/*.html', browserSync.reload);
	gulp.watch('dev/scripts/**/*.js', browserSync.reload);
});

// BrowserSync Task
gulp.task('browserSync', function(){
	browserSync.init({
		server: {
			baseDir: 'dev'
		}
	})
});