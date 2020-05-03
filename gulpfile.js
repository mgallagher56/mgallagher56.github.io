const gulp = require("gulp")
const sass = require("gulp-sass")
const browserSync = require('browser-sync').create();
const del = require('del');

let style = () => {
    return gulp.src('app/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('app/css/'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        open: false,
        proxy: "localhost:63342/htdocs/mgallagher56.github.io/app/index.html"
    });
    gulp.watch('app/scss/**/*.scss', style);
    gulp.watch('app/*.html').on('change', browserSync.reload)
    gulp.watch('app/js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;