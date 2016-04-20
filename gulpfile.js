'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(livereload());
});

gulp.task('jsHint', function () {
	return gulp.src('./src/app/**/*.js')
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('jscs', function (){
	return gulp.src('./src/app/**/*.js')
	.pipe(jscs())
	.pipe(jscs.reporter());
});
 
gulp.task('watch', function () {
	livereload.listen();
  gulp.watch('./src/assets/css/**/*.scss', ['sass']);
  gulp.watch('./src/app/**/*js', ['jsHint', 'jscs']);
});

gulp.task('default', ['sass','jsHint', 'jscs', 'watch']);