'use strict';

var gulp = require('gulp');
var rename = require('gulp-rename');
var psi = require('psi');
var sequence = require('run-sequence');
var browserSync = require('browser-sync');
var site = '';
var portNum = 8080;

gulp.task('script', function() {
	var uglify = require('gulp-uglify');

	return gulp.src('./js/*.js')
	.pipe(uglify())
    .pipe(gulp.dest('./js/min'));
});

gulp.task('jshint', function() {
    var stylish = require('jshint-stylish');
    var jshint = require("gulp-jshint");

	return gulp.src('./js/*.js')
  			.pipe(jshint())
  			.pipe(jshint.reporter(stylish));
});

gulp.task('css', function() {
	var minifyCss = require('gulp-minify-css');

	return gulp.src('./css/*.css')
    .pipe(minifyCss())
    .pipe(gulp.dest('./css/min'));
});

gulp.task('image', function() {
	var imagemin = require('gulp-imagemin');
	var pngquant = require('imagemin-pngquant');

	return gulp.src('img/*.+(jpg|png|svg|gif)')
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()]
        }))
        .pipe(gulp.dest('img/min'));
});

gulp.task('ngrok-url', function(cb) {
	var ngrok = require('ngrok');

 	return ngrok.connect(portNum, function (err, url) {
  		site = url;
  		console.log('serving your tunnel from: ' + site);
  		cb();
 	});
});

gulp.task('psi-desktop', function () {
    psi(site, {
        nokey: 'true',
        strategy: 'desktop'
    }, function(err, data) {
    	console.log(data.score);
    	console.log(data.pageStats);
    });
});

gulp.task('psi-mobile', function () {
    psi(site, {
        nokey: 'true',
        strategy: 'mobile'
    }, function(err, data) {
    	console.log(data.score);
    	console.log(data.pageStats);
    });
});

gulp.task('browser-sync-psi', function() {
	browserSync({
    	port: portNum,
    	open: false,
        server: {
        	baseDir: './'
        }
    });
});

gulp.task('psi-seq', function (cb) {
	return sequence(
		'browser-sync-psi',
  		'ngrok-url',
  		'psi-desktop',
  		'psi-mobile',
  		cb);
});

gulp.task('psi', ['psi-seq'], function() {
	process.exit();
});

gulp.task('ngrok', function() {
	return sequence(
		'browser-sync-psi',
		'ngrok-url');
});


/*
gulp.task('default', function() {
	gulp.src(['index.html',
             'css/**',
             'js/**',
             'img/**'
             ], {base: '.'})
    .pipe(uglify())
    .pipe(rename({ extname: '.min.js' }));
});
*/