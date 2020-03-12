const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const devserver = require('./webpack/devserver');
const extractCSS = require('./webpack/css.extract');
const fonts = require('./webpack/fonts');

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pug/pages/index/index.js',
            'colorsandtype': PATHS.source + '/pug/pages/uikit/colorsandtype/colorsandtype.js',
            'header': PATHS.source + '/pug/pages/uikit/header/header.js'
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/pug/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'colorsandtype.html',
                chunks: ['colorsandtype'],
                template: PATHS.source + '/pug/pages/uikit/colorsandtype/colorsandtype.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'header.html',
                chunks: ['header'],
                template: PATHS.source + '/pug/pages/uikit/header/header.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'test.html',
                chunks: ['test'],
                template: PATHS.source + '/pug/pages/uikit/test/test.pug'
            })
        ]
    },
    pug(),
    fonts()
]);

module.exports = function(env) {
    if (env === 'production') {
        return merge([
            common,
            extractCSS()
        ])
    }
    if (env === 'development') {
        return merge([
            common,
            devserver(),
            sass()
        ])
    }
};
