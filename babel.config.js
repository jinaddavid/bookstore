module.exports = function (api) {
  api.cache(true);
  const presets = [
    'module:metro-react-native-babel-preset',
    'module:react-native-dotenv',
  ];
  const plugins = [
    '@babel/plugin-proposal-export-default-from',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    '@babel/plugin-transform-runtime',
  ];

  return {
    presets,
    plugins,
    sourceMaps: true,
  };
};
