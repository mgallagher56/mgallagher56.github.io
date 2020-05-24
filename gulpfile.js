const gulp = require("gulp")
const sass = require("gulp-sass")
const browserSync = require('browser-sync').create();
const compress_images = require('compress-images');

let styles = () => {
    return gulp.src('src/scss/styles.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('src/css/'))
        .pipe(browserSync.stream());
}

let compressImages = () => {
    compress_images('src/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}', 'public/img/', {compress_force: false, statistic: true, autoupdate: true}, false,
        {jpg: {engine: 'mozjpeg', command: ['-quality', '60']}},
        {png: {engine: 'pngquant', command: ['--quality=20-50']}},
        {svg: {engine: 'svgo', command: '--multipass'}},
        {gif: {engine: 'giflossy', command: ['--colors', '64', '--use-col=web']}}, function(err, completed){
        console.log('Completed image compression')
        });
}

let  watch = () => {
    browserSync.init({
        open: false,
        proxy: "localhost:63342/htdocs/mgallagher56.github.io/public/index.html"
    });
    gulp.watch('src/img/**/*', compressImages);
    gulp.watch('src/scss/**/*.scss', styles);
    gulp.watch('src/*.html').on('change', browserSync.reload)
    gulp.watch('src/js/**/*.js').on('change', browserSync.reload)
}

exports.styles = styles;
exports.compreessImages = compressImages;
exports.watch = watch;