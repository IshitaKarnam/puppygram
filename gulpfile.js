'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var livereload = require('gulp-livereload');
var jshint = require('gulp-jshint');
var jscs = require('gulp-jscs');
var server = require('gulp-develop-server');
var htmllint = require('gulp-htmllint');
var gutil = require('gulp-util');
 
gulp.task('sass', function () {
  return gulp.src('./src/assets/css/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./src/assets/css'))
    .pipe(livereload());
});

gulp.task('jsHint', function () {
	return gulp.src(['./src/app/**/*.js'])
	.pipe(jshint())
	.pipe(jshint.reporter('default'));
});

gulp.task('jscs', function () {
	return gulp.src(['./src/app/**/*.js'])
	.pipe(jscs())
	.pipe(jscs.reporter());
});

// Run server
gulp.task('server:start', function () {
    server.listen ({
        path: './app.js',
        PORT: 8000
        });
});
gulp.task('htmllint', function () {
    return gulp.src(['.src/app/**/*.html','./index.html'])
        .pipe(htmllint({},htmllintReporter));
});
 
gulp.task('watch', function () {
	livereload.listen();
  gulp.watch('./src/assets/css/**/*.scss', ['sass']);
  gulp.watch('./src/app/**/*.js', ['jsHint', 'jscs']);
  gulp.watch('./src/app/views/**/*.html', ['htmllint']);
  gulp.watch(['./app.js'], server.restart);
});

gulp.task('default', ['sass','jsHint', 'jscs','htmllint','server:start', 'watch']);

function htmllintReporter(filepath, issues) {
	if (issues.length > 0) {
		issues.forEach(function (issue) {
			gutil.log(gutil.colors.cyan('[gulp-htmllint] ') + gutil.colors.white(filepath + ' [' + issue.line + ',' + issue.column + ']: ') + gutil.colors.red('(' + issue.code + ') ' + issue.msg));
		});
 
		process.exitCode = 1;
	}
}