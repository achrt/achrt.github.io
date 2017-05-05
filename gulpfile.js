var gulp = require('gulp');
var stylus = require('gulp-stylus');
var sourcemaps = require('gulp-sourcemaps');
var debug = require('gulp-debug');
var autoprefixer = require('gulp-autoprefixer');
var del = require('del');
var remember = require('gulp-remember');
var browserSync = require('browser-sync');
var notify = require('gulp-notify');
var gulpIf = require('gulp-if');
var svgSprite = require('gulp-svg-sprite');
var cssnano = require('gulp-cssnano');
var minifyjs = require('gulp-js-minify');
var concat = require('gulp-concat');


gulp.task('stylus', function(){
	return gulp.src('frontend/styles/styles.styl')
		.pipe(sourcemaps.init())
		.pipe(stylus())
		.on('error', notify.onError())
		.pipe(autoprefixer({
            browsers: ['last 3 versions','> 5%'],
            cascade: false
        }))
		.pipe(sourcemaps.write())
		//.pipe(cssnano())
		.pipe(gulp.dest('public/styles'))
});

gulp.task('assets', function(){
	return gulp.src(['frontend/assets/**/*.{html,jpg,png}', '!frontend/assets/**/*.svg', 'frontend/assets/**/house.svg'], {since: gulp.lastRun('assets')})
		.pipe(remember('assets'))
		.pipe(gulp.dest('public'))
});

gulp.task('combine', function() {
  return gulp.src(['public/**/*.css', 'frontend/**/*.css', 'frontend/**/*.js'])
    .pipe(gulpIf('*.css', concat('all.css'), concat('all.js')))
    .pipe(gulpIf('*.css',cssnano()))
    .pipe(gulpIf('*.js', gulp.dest('public/js'), gulp.dest('public/styles')));
});

gulp.task('compress:js', function(){
	return gulp.src('public/owl-carousel/*.js')
		.pipe(debug({title: 'before minify:'}))
		.pipe(minifyjs())
		.pipe(debug({title: 'after minify:'}))
		.pipe(gulp.dest('public/js/owl-min'))
});

gulp.task('styles:svg', function(){
	return gulp.src('frontend/assets/**/*.svg')
		.pipe(svgSprite({
			mode:{
				css:{
					dest: '.',
					bust: false,
					sprite: 'sprite.svg',
					layout: 'vertical',
					prefix: '$',
					dimensions: true,
					render: {
						styl: {dest: '_sprite.styl'}
					}
				}
			}
		}))
		.pipe(gulpIf('*.styl', gulp.dest('frontend/styles'), gulp.dest('public/styles')));
});

gulp.task('clean', function(){
	return del('public');
});

gulp.task('build', gulp.series('clean', 'styles:svg', gulp.parallel('stylus', 'assets')));

gulp.task('watch', function(){
	gulp.watch('frontend/styles/**/*.styl', gulp.series('stylus'));
	gulp.watch('frontend/assets/**/*.*', gulp.series('assets'));
});

gulp.task('serve', function(){
	browserSync.init({
		server: 'public'
	});
	browserSync.watch('public/**/*.*').on('change', browserSync.reload);
});

gulp.task('front', gulp.series('stylus', 'assets', 'compress:js', gulp.parallel('watch', 'serve')));

gulp.task('dev', gulp.series('build', 'combine', gulp.parallel('watch', 'serve')));