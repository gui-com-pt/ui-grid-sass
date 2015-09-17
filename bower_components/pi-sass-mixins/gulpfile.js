var gulp = require('gulp'),
    concat = require('gulp-concat'),
    watch = require('gulp-watch'),
    sass = require('gulp-sass'),
    requireDir = require('require-dir');

var sassDir = ['./src/*.scss', './src/**/*.scss', './src/**/**/*.scss'];

gulp.task('sass', function () {
    gulp.src(sassDir)
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./release'));
});

gulp.task('watch', function(){
    gulp.watch(sassDir, ['sass']);
});

gulp.task('default', ['sass']);
