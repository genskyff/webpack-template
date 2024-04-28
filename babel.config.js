module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      "@babel/preset-env",
      {
        modules: false,
        useBuiltIns: "entry",
        corejs: 3,
      },
    ],
    "@babel/preset-react",
  ];
  const plugins = [];

  return {
    presets,
    plugins,
  };
};
