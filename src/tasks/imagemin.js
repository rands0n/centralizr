const gulp = require('gulp')
const imagemin = require('gulp-imagemin')

const paths = require('./paths')

module.exports = () => {
  return gulp.src(paths.images.glob)
    .pipe(imagemin())
    .pipe(gulp.dest(paths.images.dist))
}
