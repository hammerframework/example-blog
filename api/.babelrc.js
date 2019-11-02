module.exports = {
  extends: "../babel.config.js",
  presets: [
    [
      "@babel/preset-env",
      {
        targets: {
          node: "12.13.0"
        },
        useBuiltIns: "entry",
        corejs: 3
      }
    ]
  ],
  plugins: [
    [
      "babel-plugin-module-resolver",
      {
        alias: {
          src: "./src"
        }
      }
    ]
  ]
};
