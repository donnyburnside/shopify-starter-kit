const gulp = require('gulp');
const babel = require('rollup-plugin-babel');
const commonjs = require('rollup-plugin-commonjs');
const flatten = require('gulp-flatten');
const imagemin = require('gulp-imagemin');
const postcss = require('gulp-postcss');
const resolve = require('rollup-plugin-node-resolve');
const rollup = require('gulp-better-rollup');
const sass = require('gulp-sass');


// Styles
gulp.task('styles:sass', function() {
    return gulp.src('./src/styles/theme.scss')
        .pipe(sass({
            includePaths: ['./node_modules'],
        }).on('error', sass.logError))
        .pipe(postcss())
        .pipe(gulp.dest('./theme/assets'));
});
gulp.task('styles:liquid', function() {
    return gulp.src('./src/styles/*.liquid')
        .pipe(flatten())
        .pipe(gulp.dest('./theme/assets'))
});
gulp.task('styles', gulp.series('styles:sass', 'styles:liquid'));


// Scripts
gulp.task('scripts:js', function() {
    return gulp.src('./src/scripts/theme.js')
        .pipe(rollup({
            plugins: [ babel(), resolve(), commonjs() ]
        }, 'umd'))
        .pipe(gulp.dest('./theme/assets'))
});
gulp.task('scripts:liquid', function() {
    return gulp.src('./src/scripts/*.liquid')
        .pipe(flatten())
        .pipe(gulp.dest('./theme/assets'))
});
gulp.task('scripts', gulp.series('scripts:js', 'scripts:liquid'));


// Images
gulp.task('images', function() {
    return gulp.src('./src/images/**/*.{png,gif,jpg,svg}')
            .pipe(flatten())
            .pipe(imagemin())
            .pipe(gulp.dest('./theme/assets'))
});


// Build
gulp.task('build', gulp.series('styles', 'scripts', 'images'));


// Watch
gulp.task('watch', function(callback) {
    gulp.watch('./src/styles/**/*.{scss,liquid}', gulp.series('styles'));
    gulp.watch('./src/scripts/**/*.{js,liquid}', gulp.series('scripts'));
    gulp.watch('./src/images/**/*.{png,gif,jpg,svg}', gulp.series('images'));
    callback();
});