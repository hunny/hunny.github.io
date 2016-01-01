var gulp = require('gulp');
var connect = require('gulp-connect');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifycss = require('gulp-minify-css');
var imagemin = require('gulp-imagemin');

gulp.task('hello', function() {
	console.log('Hello, Gulp World!');
});

gulp.task('default', ['hello']);

gulp.task('copy', function() {
	return gulp.src('index.html').pipe(gulp.dest('dest'));
});

gulp.task('multitask', ['hello', 'copy'], function() {
	console.log('multi task copy.');
});

gulp.task('copy', function() {
	var src = 'images/*.png';
	src = 'images/*.{png,jpg}';
	src = 'images/*/*';
	src = 'images/**/*';
	return gulp.src(src).pipe(gulp.dest('dest'));
});

gulp.task('data', function() {
	return gulp.src(['xml/*.xml', 'json/*.json']).pipe(gulp.dest('dest/data'));
});

gulp.task('datanegate', function() {
	return gulp.src(['xml/*.xml', 'json/*.json', '!json/abc.json']).pipe(gulp.dest('dest/data'));
});

gulp.task('watch', function() {
	gulp.watch('index.html', ['copy']);
	gulp.watch('xml/*.xml', ['data']);
});

gulp.task('server', function() {
	connect.server({
		root: '.'
	});
});

gulp.task('serverlive', function() {
	connect.server({
		root: 'dest',
		livereload: true
	});
});
gulp.task('copylive', function() {
	return gulp.src('index.html')
	.pipe(gulp.dest('dest'))
	.pipe(connect.reload());
});
gulp.task('watchlive', function() {
	gulp.watch('index.html', ['copylive']);
});
gulp.task('defaultlive', ['serverlive', 'watchlive']);

gulp.task('concatjs', function() {
	gulp.src(['*.js'])
	.pipe(concat('vendor.js'))
	.pipe(gulp.dest('dest'))
	.pipe(uglify())
	.pipe(rename('vendor.min.js'))
	.pipe(gulp.dest('dest'));
});

//glob, multi-glob, nagate, master, watch, plugin, sass, less, connect, reload, concat, uglify, rename, minifycss, imagemin