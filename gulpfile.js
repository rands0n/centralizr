const gulp = require('gulp')

const paths = require('./src/tasks/paths')

gulp.task('clean', require('./src/tasks/clean'))
gulp.task('imagemin', require('./src/tasks/imagemin'))
gulp.task('fonts', require('./src/tasks/fonts'))
gulp.task('ghpages', require('./src/tasks/ghpages'))

gulp.task('stylelint', require('./src/tasks/stylelint'))
gulp.task('postcss', require('./src/tasks/postcss'))

gulp.task('webserver', require('./src/tasks/webserver'))
gulp.task('metalsmith', require('./src/tasks/metalsmith'))

const styles = gulp.series('stylelint', 'postcss')
const docs = gulp.parallel('metalsmith', styles, 'imagemin')

gulp.task('watch', () => {
  gulp.watch(paths.styles.glob, styles)
  gulp.watch(paths.docs.glob, docs)

  gulp.watch(paths.docs.styles.glob, styles)
})

gulp.task('build', gulp.series(
    'clean',
    'fonts',
    'metalsmith',
    gulp.parallel(
      'stylelint',
      'postcss'
    ),
    'imagemin'
  )
)

gulp.task('deploy',
  gulp.series(
    'build',
    'ghpages'
  )
)

gulp.task('default', gulp.series(
    'clean',
    'fonts',
    'metalsmith',
    gulp.parallel(
      'stylelint',
      'postcss'
    ),
    'imagemin',
    'webserver',
    'watch'
  )
)
