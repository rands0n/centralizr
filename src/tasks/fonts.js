const gulp = require('gulp')
const copy = require('gulp-copy')

const paths = require('./paths')

const options = {
  prefix: 2
}

module.exports = () => {
  return gulp.src(paths.fonts.glob)
    .pipe(copy(paths.fonts.dist, options))
    .pipe(gulp.dest(paths.fonts.dist))
}
