const EsmWebpackPlugin = require('@purtuga/esm-webpack-plugin');

module.exports = {
  // enables ESM output, because of course webpack doesn't support it by default
  plugins: [new EsmWebpackPlugin()],
  output: {
    library: 'mfeangular',
    libraryTarget: 'var',
  },
};
