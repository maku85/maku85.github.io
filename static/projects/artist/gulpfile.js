var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var cssnano = require('gulp-cssnano');

gulp.task('styles', function () {
  gulp.src('sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(cssnano())
    .pipe(gulp.dest('./css/'));
});

gulp.task('browserSyncPublic', () => {
  browserSync.init({
    server: {
      baseDir: './'
    },
  })
})

gulp.task('default', ['browserSyncPublic'], () => {
  gulp.watch('sass/**/*.scss', ['styles']);
  gulp.watch('css/**/*', browserSync.reload);
  gulp.watch('index.html', browserSync.reload);
});
