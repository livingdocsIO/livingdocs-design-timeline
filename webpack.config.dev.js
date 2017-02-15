var path = require('path')
var webpack = require('webpack')
var OpenPackPlugin = require('openpack')
var autoprefixer = require('autoprefixer')
var CleanWebpackPlugin = require('clean-webpack-plugin')
var CopyWebpackPlugin = require('copy-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var BuildDesignPlugin = require('./lib/build_design_plugin')

var distPath = path.resolve('./dist')

module.exports = {
  context: __dirname,
  devtool: 'source-map',
  entry: {
    timeline: './source/stylesheets/timeline.scss'
  },
  output: {
    path: distPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /timeline\.scss$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'resolve-url-loader',
            options: {
              root: path.resolve('./source/stylesheets')
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [
                  require('autoprefixer')
                ]
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
    ],
  },
  resolve: {
    extensions: [
      '.scss',
      '.js'
    ]
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new BuildDesignPlugin({
      src: path.resolve('./source'),
      dest: distPath
    }),
    new ExtractTextPlugin({
      filename: '[name].css',
      disable: true
    }),
    new HtmlWebpackPlugin({template: 'source/index.ejs', filename: 'index.html', inject: false, isDev: true}),
    new HtmlWebpackPlugin({template: 'source/iframe.ejs', filename: 'iframe.html', inject: false, isDev: true}),
    new CopyWebpackPlugin([
      {
        context: 'source',
        from: 'assets/@(images|scripts|stylesheets)/**',
        to: path.resolve('./dist')
      },
      {
        context: 'source',
        from: '*.html',
        to: path.resolve('./dist')
      },
      {
        context: 'source/vendor',
        from: '{livingdocs-framework-6.4.1.min.js,livingdocs-framework-6.4.1.min.css,editable-1.2.1.min.js}',
        to: path.resolve('./dist/vendor')
      }
    ]),
    new OpenPackPlugin()
  ],
  devServer: {
    outputPath: distPath,
    historyApiFallback: true,
    inline: true,
    contentBase: distPath,
    port: 3333
  }
}
