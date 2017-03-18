const gulp = require('gulp')
const webserver = require('gulp-webserver')

const paths = require('./paths')

const options = {
  livereload: true,
  port: 3000,
  open: true,
  host: '0.0.0.0'
}

module.exports = () => {
  return gulp.src(paths.dist)
    .pipe(webserver(options))
}
