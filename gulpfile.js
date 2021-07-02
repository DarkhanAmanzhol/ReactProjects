var gulp = require('gulp');
var sass = require('gulp-sass')(require('sass'));
var uglifycss = require('gulp-uglifycss');

gulp.task('sass', function() {
    return gulp.src('./src/assets/scss/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./src/assets/css/'));
  });

gulp.task('sass', function () {
    return gulp.src('./src/assets/scss/*.scss')
            .pipe(sass().on('error',sass.logError))
            .pipe(gulp.dest('./src/assets/css'));
});


gulp.task('css', function (done) {
  gulp.src('./src/assets/css/*.css')
    .pipe(uglifycss({
    //   "maxLineLen": 80,
      "uglyComments": true
    }))
    .pipe(gulp.dest('./src/assets/dist/'));
    done();
});

gulp.task('run',gulp.series('sass','css'))

gulp.task('watch',function(){
    gulp.watch('./src/assets/scss/*.scss',gulp.series('sass'))
    gulp.watch('./src/assets/css/*.css', gulp.series('css'));
})

gulp.task('default',gulp.series('run','watch'));