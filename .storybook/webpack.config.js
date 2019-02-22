module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.resolve.extensions.push(
    ".js",
    ".vue",
    ".css",
    ".less",
    ".scss",
    ".sass",
    ".html"
  );

  defaultConfig.module.rules.push({
    test: /\.js$/,
    exclude: /node_modules/,
    use: [
      {
        loader: "babel-loader"
      }
    ]
  });

  defaultConfig.module.rules.push({
    test: /\.less$/,
    loaders: ["style-loader", "css-loader", "less-loader"]
  });

  defaultConfig.module.rules.push({
    test: /\.styl$/,
    loader: "style-loader!css-loader!stylus-loader"
  });

  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: ["vue-style-loader", "css-loader", "sass-loader"]
  });

  return defaultConfig;
};
