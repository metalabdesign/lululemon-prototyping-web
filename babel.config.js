module.exports = api => {
  const plugins = [];

  if (api.env("test")) {
    plugins.push("require-context-hook");
  }

  return {
    presets: ["@vue/app"],
    plugins: plugins
  };
};
