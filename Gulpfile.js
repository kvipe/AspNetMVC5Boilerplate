const gulp = require('gulp');
const preproc = require('gulp-less');
const cleanCSS = require('gulp-clean-css');
const autoprefixer = require('gulp-autoprefixer');
const gcmq = require('gulp-group-css-media-queries');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');



function css(){
	return gulp.src('./Content/global.less')
            .pipe(preproc())
            .pipe(gcmq())
            .pipe(autoprefixer())
            .pipe(cleanCSS({compatibility: 'ie9'}))
            .pipe(gulp.dest('./Content'))
}


gulp.task('css', css);

gulp.task('default', gulp.parallel('css'));