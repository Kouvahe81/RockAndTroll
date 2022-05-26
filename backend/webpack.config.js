const path = require("path"); //to access built-in plugins

module.exports = {
    entry: {
     index: path.resolve(__dirname, './src/index')
   },
    output: {
        path: __dirname + '/build',
        filename: 'bundle.js'
    }
}

module.exports = {
  mode: 'production',
}
