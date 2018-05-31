const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  mode: 'development',
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, exclude: /node_modules/, loader: "babel-loader"
      },
      {
        test: /\.css$/,
        use: [
        'style-loader',
        'css-loader'
       ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      }
    ]
  },
  plugins: [
   new HtmlWebpackPlugin({
     title: 'Coders Prod',
     template: './src/index.html'
   })
  ]
};