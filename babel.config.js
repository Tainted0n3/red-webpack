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

module.exports = api => {
  api.cache(true);
  return {
    presets,
    plugins
  };
};
