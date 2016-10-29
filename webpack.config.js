const path = require('path');

const PATHS = {
  lib: path.join(__dirname, 'lib'),
  build: path.join(__dirname, 'build')
}

module.exports = {
  entry: {
    main: PATHS.lib + '/index.js',
  },
  output: {
    path: PATHS.build,
    filename: "[name].bundle.js"
  },
  module: {
      loaders: [
        {
          test: /\.jsx?$/,
          exclude: /(node_modules|bower_components)/,
          loader: 'babel',
          query: {
            presets: ['es2015', 'react'],
          },
        },
        { test: /\.css$/, loader: 'style!css' },
        { test: /\.scss$/, loader: 'style!css!sass' },
      ],
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['', '.js', '.jsx', '.json', '.scss', '.css'],
    },
  };
