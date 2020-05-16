const gulp = require("gulp")
const sass = require("gulp-sass")
const browserSync = require('browser-sync').create();
const del = require('del');

let style = () => {
    return gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.stream());
}

function watch() {
    browserSync.init({
        open: false,
        proxy: "localhost:63342/htdocs/mgallagher56.github.io/dist/index.html"
    });
    gulp.watch('src/scss/**/*.scss', style);
    gulp.watch('src/*.html').on('change', browserSync.reload)
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload)
}

exports.style = style;
exports.watch = watch;