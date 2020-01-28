const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: ['last 2 versions', 'safari >= 7']
      }
    }
  ]
];

const plugins = [];

// Hook into the Babel API
// https://babeljs.io/docs/en/config-files#config-function-api
module.exports = api => {
  // https://babeljs.io/docs/en/config-files#apicache
  api.cache.never();

  return {
    presets,
    plugins
  };
};
