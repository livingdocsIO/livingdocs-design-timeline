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
var isDev = process.env.OPTIMIZE !== 'true'

// For dev, include the styles with the style loader in a script tag
// For the build, extract the CSS and write it to a file
var extractCSS = new ExtractTextPlugin('[name].css', {disable: isDev})
var CSSLoaders = ['css-loader', 'postcss-loader', 'resolve-url-loader', 'sass-loader']
if (isDev) CSSLoaders.unshift('style-loader')

module.exports = {
  context: __dirname,
  devtool: isDev ? 'source-map' : 'nosources-source-map',
  entry: {
    timeline: './source/stylesheets/timeline.scss'
  },
  output: {
    path: distPath,
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /\.(png|jpe?g|svg|gif)$/,
        loader: 'url-loader'
      },
      {
        test: /timeline\.scss$/,
        loader: extractCSS.extract(CSSLoaders)
      },
    ],
  },
  resolve: {
    extensions: [
      '',
      '.scss',
      '.js'
    ]
  },
  resolveUrlLoader: {
    root: path.resolve('./source/stylesheets')
  },
  postcss: function () {
    return [autoprefixer]
  },
  plugins: [
    new CleanWebpackPlugin([distPath]),
    new BuildDesignPlugin({
      src: path.resolve('./source'),
      dest: distPath
    }),
    extractCSS,
    new HtmlWebpackPlugin({template: 'source/index.ejs', filename: 'index.html', inject: false, isDev: isDev}),
    new HtmlWebpackPlugin({template: 'source/iframe.ejs', filename: 'iframe.html', inject: false, isDev: isDev}),
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
        }
      ].concat(isDev ? [
        {
          context: 'source/vendor',
          from: '{livingdocs-framework-6.4.1.min.js,livingdocs-framework-6.4.1.min.css,editable-1.2.1.min.js}',
          to: path.resolve('./dist/vendor')
        }
      ] : []
      )
    ),
  ].concat(isDev ? [
      new OpenPackPlugin()
    ] : [
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.OccurrenceOrderPlugin(true),
      new webpack.optimize.UglifyJsPlugin()
    ]
  ),
  devServer: {
    outputPath: distPath,
    historyApiFallback: true,
    inline: true,
    contentBase: distPath,
    port: 3333
  }
}
