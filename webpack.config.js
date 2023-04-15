const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development', 
    entry: './index.ts',
    output: {
      path: path.join(__dirname, './dist'), 
      filename: 'app.js',
      publicPath: '/' 
    }, 
    module: {
      rules: [
        {
          test: /\.(jpe?g|png|gif|svg|ico|pdf)$/, 
          loader: 'file-loader',
          exclude: /node_modules/
        }, 
        {
          test: /\.tsx?$/, 
          loader: 'ts-loader', 
          exclude: /node_modules/
        }
      ]
    }, 
    resolve: {
      extensions: ['', '.js', '.ts']
    }, 
    devServer: {
      historyApiFallback: true
    },
    plugins: [
      new HtmlWebpackPlugin({
          template: './index.html'
      })
    ],
    performance: {
      maxEntrypointSize: 512000,
      maxAssetSize: 512000
    }, 
    devtool: 'source-map'
}