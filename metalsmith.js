const metalsmith = require('metalsmith')
const markdown = require('metalsmith-markdown')
const layouts = require('metalsmith-layouts')
const ignore = require('metalsmith-ignore')
const permalinks = require('metalsmith-permalinks')
const collections = require('metalsmith-collections')

const paths = require('./src/tasks/paths')

metalsmith(__dirname)
  .metadata({})
  .source(paths.docs.src)
  .destination(paths.dist)
  .clean(false)
  .use(markdown())
  .use(permalinks())
  .use(collections())
  .use(layouts({
    engine: 'handlebars',
    directory: './docs/layouts/',
    partials: './docs/layouts/partials'
  }))
  .ignore([
    'layouts'
  ])
  .build((err) => {
    if (err) throw err
  })
