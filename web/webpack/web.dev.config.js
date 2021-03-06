const path = require('path')
const webpack = require('webpack')

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-hot-middleware/client',
    'babel-polyfill',
    path.join(__dirname, '../../index.web')
  ],
  output: {
    path: path.join(__dirname, '../public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    loaders: [
      // take all less files, compile them, and bundle them in with our js bundle
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015', 'react'],
          plugins: [['react-transform', {
            transforms: [{
              transform: 'react-transform-hmr',
              imports: ['react'],
              // this is important for Webpack HMR:
              locals: ['module']
            }]
          }]]
        }
      },
      { test: /\.png$/, loader: 'url-loader?mimetype=image/png'},
      { test: /\.less$/, loader: 'style!css!autoprefixer?browsers=last 2 version!less' },
      { test: /\.json$/, loader: 'json' }
      
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
        PLATFORM_ENV: JSON.stringify('web')
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}
