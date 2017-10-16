const path = require('path');

module.exports = {
  entry: {
    index: './js/index.js',
  },
  output: {
    path: path.join(__dirname, 'assets'),
    filename: '[name].bundle.js',
    publicPath: "/assets",
  },
  module: {
    rules: [
      /* {
        enforce: "pre",
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "eslint-loader",
      },*/
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['latest', 'react', 'stage-2']
          }
        }
      },
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'sass-loader']
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: '/fonts/[name].[ext]'
        }
      }
    ]
  },
  devtool: 'source-map',
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        pathRewrite: {'^/api' : ''}
      }
    },
    historyApiFallback: true
  }
};
