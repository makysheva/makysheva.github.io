const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist')
};

module.exports = {
    entry: PATHS.source + '/index.js',
    output: {
        path: PATHS.build,
        filename: '[name].js'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: PATHS.source + '/index.pug'
        })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        }],
        rules: [{
            test: /\.pug$/,
            loader: 'pug-loader',
            options: {
                pretty: true
            }
        }]
    },
    devServer: {
        overlay: true
    }
}