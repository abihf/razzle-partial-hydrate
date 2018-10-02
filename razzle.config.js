
module.exports = {
  modify: (config, { target, dev }, webpack) => {
    if (target === 'web') {
      config.module.rules.push({
        test: /\.page\.js$/,
        use: [
          {
            loader: require.resolve('./page-loader'),
          },
        ],
      })
    }
    return config;
  },
};
