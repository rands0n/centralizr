# Getting Started

## Creating tasks

All tasks are located on the `./tasks` folder, and follow the file/naming convention of: `namespace-action.js / namespace:action`, for example `build-scripts.js build:scripts`.

### Requiring tasks

On the `gulpfile`, we only define the tasks, except for the macro ones, such as `watch` which is just a stack of individual tasks. In order to require a task, you must use the `require` keyword:

```javascript
const taskName = require('./gulp/task-name')

gulp.task('task:name', taskName) // Referring to task-name.js
```

### Task boilerplate

This is pretty much straight forward:

```javascript
const gulp = require('gulp')
const gulpPlugin = require('gulp-plugin') // Demo

const paths = require('./paths') // In case you need to handle paths

// done is the callback provided by gulp is case you need to finish a task manually
module.exports = (done) => () {
  return gulp.src(CUSTOM_GLOB)
    .pipe(gulpPlugin())
    .pipe(gulp.dest(CUSTOM_GLOB))
}
```
