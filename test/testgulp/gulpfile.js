var gulp = require('gulp');

gulp.task('hello', function() {
	console.log('Hello, Gulp World!');
});

gulp.task('default', ['hello']);

gulp.task('copy', function() {
	return gulp.src('index.html').pipe(gulp.dest('dest'));
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
//glob, multi-glob, nagate, master, watch, plugin, sass, less, connect, reload, concat, uglify, rename, minifycss, imagemin