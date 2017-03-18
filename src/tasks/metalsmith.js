const exec = require('child_process').exec

module.exports = (done) => {
  exec('node metalsmith', (err) => {
    if (err) throw err
    done()
  })
}
