const presets = [
  [
    "@babel/preset-env",
    {
      modules: false,
      useBuiltIns: "entry",
      corejs: 3,
    },
  ],
  [
    "@babel/preset-react",
    {
      runtime: "automatic",
    },
  ],
  "@babel/preset-typescript",
];

const plugins = [];

export default function (api) {
  api.cache(true);

  return {
    presets,
    plugins,
  };
}
