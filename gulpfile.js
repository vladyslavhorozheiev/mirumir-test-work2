//add  gulp
var gulp = require("gulp");

//add plugins
var sass = require("gulp-sass"),
	cssnano = require("gulp-cssnano"),
	autoprefixer = require("gulp-autoprefixer"),
	imagemin = require("gulp-imagemin"),
	concat = require("gulp-concat"),
	rename = require("gulp-rename"),
	plumber = require('gulp-plumber'),
	uglify = require("gulp-uglify");

//add tasks
//copy html files to dist directory
gulp.task("html", function () {
	return gulp.src("src/*.html").pipe(gulp.dest("dist"));
});

//concat, compile scss, autoprefixer, min code
gulp.task("scss", function () {
	return gulp.src("src/assets/styles/**.scss").pipe(concat("style.scss")).pipe(sass()).pipe(autoprefixer({
		browsers: ['last 2 version'],
		cascade: false
	})).pipe(cssnano()).pipe(rename({
		sufix: '.min'
	})).pipe(gulp.dest("dist/assets/styles"));
});

//compress image
gulp.task('imgs', function () {
	gulp.src('src/assets/images/**.*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/assets/images'));
});

//compressing js
gulp.task('js', function () {
	gulp.src('src/assets/scripts/**.js').pipe(plumber()).pipe(uglify()).pipe(gulp.dest('dist/assets/scripts'));
});


//see after modified files
gulp.task('watch', function () {
	gulp.watch('src/*.html', ['html']);
	gulp.watch('src/assets/scripts/*.js', ['js']);
	gulp.watch('src/assets/styles/*.scss', ['scss']);
	gulp.watch('src/assets/images/**.*)', ['imgs']);
});

//start tasks
gulp.task('default', ['html', 'scss', 'js', 'imgs', 'watch']);
