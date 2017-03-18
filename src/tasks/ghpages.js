const gulp = require('gulp')
const ghpages = require('gulp-gh-pages')

const paths = require('./paths')

module.exports = () => {
  return gulp.src(`${paths.dist}/**`)
    .pipe(ghpages())
}
