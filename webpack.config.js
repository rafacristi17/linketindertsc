const path = require('path');
const fortTsCheckWebpackPlugin=require('fork-ts-checker-webpack-plugin');

module.exports = {
    mode: 'development',
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [new fortTsCheckWebpackPlugin()],
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'public', 'dist'),
  },
};