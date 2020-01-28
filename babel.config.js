const presets = [
  [
    '@babel/preset-env',
    {
      targets: '> 0.25%, not dead'
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
