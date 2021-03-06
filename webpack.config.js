const path = require('path');

module.exports = {
  entry: __dirname + '/src/index.jsx',
  module: {
    rules: [
      {
        test: [/\.jsx$/],
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/transform-runtime']
          }
        }
      }
    ]
  },
   output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public')
  }
}
