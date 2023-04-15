const path = require('path'); 
const HtmlWebpackPlugin = require('html-webpack-plugin'); 

module.exports = {
    mode: 'development', 
    entry: './index.js',
    output: {
        path: path.join(__dirname, './dist'), 
        filename: 'app.js',
        publicPath: '/' 
    }, 
    module: {
        rules: [
            {
                test: /\.(jpe?g|png|gif|svg|ico|pdf)$/, 
                exclude: /node_modules/,
                loader: 'file-loader'
            }
        ]
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