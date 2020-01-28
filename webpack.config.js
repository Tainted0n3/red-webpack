const path = require('path');

/* Plugins */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

// Changing this value modifies the behaviour of the
// devServer properties as well as webpack
const target = 'node'; // ||'web'

// Our default output directory
// This is used by both webpack and the devServer
const outputPath = path.resolve(__dirname, 'dist');

/* Loaders */
const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env']
  }
};

/*
Get command line arguments from webpack-cli to set the mode.
These are passed in via the npm scripts
--mode [development|production]
*/
module.exports = (args, mode) => {
  return {
    target,
    mode: mode,
    entry: './src/app.js',
    output: {
      path: outputPath,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          test: /\m?.js$/,
          exclude: /(node_modules)/,
          use: [babelLoader]
        }
      ]
    },
    plugins: [new CleanWebpackPlugin()],
    devServer: {
      cotentBase: outputPath,
      writeToDisk: true,
      open: target === 'node' ? false : true,
      index: target === 'node' ? '' : 'index.html'
    }
  };
};
