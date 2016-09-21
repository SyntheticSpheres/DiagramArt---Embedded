var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'cheap-module-source-map',
  entry:  {
      diagramartlibrary : "./src/library.js",
      diagramartdetail : "./src/detail.js"
  },
  output: {
      path: __dirname + "/js",
      filename: "[name].js"
  },
  module: {
    loaders: [
        {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                plugins: ['transform-class-properties'],
                presets: ['es2015', 'react']
            }
        },
        {
            test: /\.js$/,
            loader: "strip-loader?strip[]=debug,strip[]=console.log"
        }
    ]
  },
    plugins: [
      new webpack.DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production')
            }
      }),
      new webpack.optimize.UglifyJsPlugin({
          compress: {
              warnings: false
          }
      })
    ],
};
