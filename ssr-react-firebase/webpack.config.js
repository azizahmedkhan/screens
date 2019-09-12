module.exports = {
    entry: './src/browser/index.js',
    module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
    ]
    },
    output: {
        filename:'bundle.js',
        path: __dirname+'/public'
    }
}; 