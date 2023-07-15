const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const EslingPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: path.resolve(__dirname, 'rs-css/src/index.ts'),

    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist'),
      assetModuleFilename: 'img/[name][ext][query]',
    },

    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader'],
        },
        { 
            test: /\.ts$/i,
            use: 'ts-loader'
        },
        {
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
        }
      ],
    },

    resolve: {
        extensions: ['.ts', '.js'],
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'rs-css/index.html'),
      }),
      new EslingPlugin({ extensions: 'ts' }),
    ],

    devServer: {
      static: {
        directory: path.join(__dirname, '../dist'),
      },
      open: true,
    },

    mode: 'production',
  };