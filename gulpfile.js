var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');
//var browserSync = require('browser-sync');

gulp.task('sass',()=>
  gulp.src('./public/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      versions: ['last 2 browsers']
    }))
    .pipe(gulp.dest('./public/css'))
    //.pipe(browserSync.reload({stream:true}))
);

gulp.task('watch', () => {
    gulp.watch('./public/**/*.scss', ['sass']);
});

gulp.task('default', ['sass']);