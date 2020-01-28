const path = require('path');

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
      path: path.resolve(__dirname, 'dist'),
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
      contentBase: path.resolve(__dirname, 'dist'),
      writeToDisk: true,
      open: true,
      index: 'index.html'
    }
  };
};
