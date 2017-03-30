const src = './src'
const dist = './dist'
const docs = './docs'

module.exports = {
  src: src,
  dist: dist,
  scripts: {
    src: `${src}/scripts`,
    entry: `${src}/scripts/entry.js`,
    glob: `${src}/scripts/**/*.js`,
    dist: `${dist}/scripts/`
  },
  styles: {
    src: `${src}/styles`,
    entry: `${src}/styles/centralizr.css`,
    glob: `${src}/styles/**/*.css`,
    dist: `${dist}/styles/`
  },
  images: {
    src: `${src}/images`,
    glob: `${src}/images/**/*.{png,jpg,jpeg,gif}`,
    dist: `${dist}/images/`
  },
  icons: {
    src: `${src}/icons`,
    glob: `${src}/icons/**/*.{svg}`,
    dist: `${dist}/icons/`
  },
  fonts: {
    src: `${src}/fonts`,
    glob: `${src}/fonts/**/*.{woff2,woff}`,
    dist: `${dist}/fonts/`
  },
  docs: {
    src: `${docs}/`,
    glob: `${docs}/**/*.{md,html}`,
    scripts: {
      src: `${docs}/scripts`,
      entry: `${docs}/scripts/entry.js`,
      glob: `${docs}/scripts/**/*.js`,
      dist: `${dist}/scripts/`
    },
    styles: {
      src: `${docs}/styles`,
      entry: `${docs}/styles/main.css`,
      glob: `${docs}/styles/**/*.css`,
      dist: `${dist}/styles/`
    }
  }
}
