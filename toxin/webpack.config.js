const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const pug = require('./webpack/pug');
const sass = require('./webpack/sass');
const devserver = require('./webpack/devserver');
const extractCSS = require('./webpack/css.extract');
const fonts = require('./webpack/fonts');
const favicons = require('./webpack/favicons');
const images = require('./webpack/images')

const PATHS = {
    source: path.join(__dirname, 'src'),
    build: path.join(__dirname, 'build')
};

const common = merge([
    {
        entry: {
            'index': PATHS.source + '/pages/index/index.js',
            'colors-type': PATHS.source + '/pages/colors-type/colors-type.js',
            'header': PATHS.source + '/pages/header/header.js',
            'form-elements': PATHS.source + '/pages/form-elements/form-elements.js',
            'cards': PATHS.source + '/pages/cards/cards.js',
        },
        output: {
            path: PATHS.build,
            filename: './js/[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.(jpeg|jpg|png|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]'
                    }
                },
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                chunks: ['index'],
                template: PATHS.source + '/pages/index/index.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'colors-type.html',
                chunks: ['colors-type'],
                template: PATHS.source + '/pages/colors-type/colors-type.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'header.html',
                chunks: ['header'],
                template: PATHS.source + '/pages/header/header.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'form-elements.html',
                chunks: ['form-elements'],
                template: PATHS.source + '/pages/form-elements/form-elements.pug'
            }),
            new HtmlWebpackPlugin({
                filename: 'cards.html',
                chunks: ['cards'],
                template: PATHS.source + '/pages/cards/cards.pug'
            }),
            new webpack.ProvidePlugin({
                $: 'jquery',
                jQuery: 'jquery',
                'window.jQuery': 'jquery',
            }),
        ]
    },
    pug(),
    fonts(),
    favicons(),
    images()
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
