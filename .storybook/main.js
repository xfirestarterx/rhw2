const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  "stories": [
    "../src/**/*.stories.mdx",
    "../src/**/*.stories.@(js|jsx|ts|tsx)"
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials"
  ],
  webpackFinal: async (config, { configType }) => {
    config.module.rules.push({
      test: /\.styl$/,
      include: path.resolve(__dirname, '../'),
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1,
            modules: {
              localIdentName: "[name]__[local]--[hash:base64:3]",
            },
          }
        },
        {
          loader: 'stylus-loader',
        }
      ],
    });

    config.plugins.push(new MiniCssExtractPlugin({
      filename: 'css/[name].css',
    }));

    return config;
  },
}
