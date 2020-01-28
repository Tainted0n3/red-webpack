const path = require('path');

/* Plugins */
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Changing this value modifies the behaviour of the
// devServer properties as well as webpack
// By setting this to 'web' you will need to create an
// index.html in /src to be picked up by the HTML plugin
const target = 'node'; // ||'web'

// Our default output directory
// This is used by both webpack and the devServer
const outputPath = path.resolve(__dirname, 'dist');

// Changing this values change the name of the default file
// served by html-webpack-plugin as well as the dev server
// to know what to serve
const indexFilename = 'index.html';

/* Loaders */
const babelLoader = {
  loader: 'babel-loader'
  // Not needed this is set in babel.config.js
  /*options: {
    presets: ['@babel/preset-env']
  }*/
};

const plugins = [new CleanWebpackPlugin()];

/*
Get command line arguments from webpack-cli to set the mode.
These are passed in via the npm scripts
--mode [development|production]
*/
module.exports = (args, options) => {
  const { mode } = options;
  const isWeb = target !== 'node';
  const isProduction = mode === 'production';

  // Selectively add any plugin we need if we are targeting the web
  // Uses !== 'node' as web can also be specified as ''
  if (isWeb) {
    plugins.push(
      new HtmlWebpackPlugin({
        title: 'RED - Webpack',
        filename: indexFilename,
        template: `src/${indexFilename}`,
        minify: {
          collapseWhitespace: isProduction,
          removeComments: isProduction,
          removeRedundantAttributes: isProduction,
          removeScriptTypeAttributes: isProduction,
          removeStyleLinkTypeAttributes: isProduction,
          useShortDoctype: isProduction
        }
      })
    );
  }

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

    plugins,

    devServer: {
      clientLogLevel: 'info',
      contentBase: outputPath,
      writeToDisk: true,
      open: isWeb,
      index: isWeb ? indexFilename : undefined
    }
  };
};
