const path = require('path');

/* Our top level directory for the build process */
const distributionDirectory = path.resolve(__dirname, 'dist');

/* Plugins */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

/* Loaders */
const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env']
  }
};

/*
Get command line arguments from webpack-cli to set the mode.
--mode [development|production]
*/
module.exports = (args, mode) => {
  return {
    mode: mode,
    entry: './src/app.js',
    output: {
      path: distributionDirectory,
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
      contentBase: distributionDirectory,
      writeToDisk: true,
      open: true,
      index: 'index.html'
    }
  };
};
