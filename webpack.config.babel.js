import path from 'path';
import cssnext from 'postcss-cssnext';

const config = {
  context: __dirname,
  entry: {
    example: './src/example.js',
  },
  output: {
    path: 'dist/',
    filename: '[name].js',
  },
  resolve: {
    root: [
      path.join(__dirname, 'src/'),
    ],
    extensions: ['', '.js', '.jsx', '.css'],
  },
  module: {
    loaders: [
      { test: /\.json$/, loader: 'json-loader' },
      { test: /\.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.css$/,
        loader: 'style!css-loader?modules&importLoaders=1&localIdentName=[name]-[local]-[hash:base64:4]',
      },
    ],
  },
  postcss() {
    return [cssnext];
  },
  devServer: {
    devtool: true,
    colors: true,
    progress: true,
    host: '0.0.0.0',
  },
};

export default config;