const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'dist'),
};
const PAGES_DIR = `${PATHS.source}/cards/`

module.exports = {
    entry: {
        'header': PATHS.source + '/cards/header/header.js',
        'footer': PATHS.source + '/cards/footer/footer.js'
    },
    output: {
        path: PATHS.build,
        filename: '[name].js',
        publicPath: '/'
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/header/header.pug`,
            filename: './dist/header.html',
            inject: true
          }),
          new HtmlWebpackPlugin({
            template: `${PAGES_DIR}/footer/footer.pug`,
            filename: './dist/footer.html',
            inject: true
          })
    ],
    module: {
        rules: [{
            test: /\.js$/,
            loader: 'babel-loader',
            exclude: '/node_modules/'
        },
        {
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