const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = function(env){
    isDev = env === 'development'
    return {
        module: {
            rules: [
                {
                    test: /\.(ico|png|svg|webmanifest|xml)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/favicons/',
                        publicPath: isDev ? '/assets/favicons/' : '/toxin/build/assets/favicons/'
                    },
                },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: 'src/assets/favicons',
                    to: './assets/favicons'
                },
            ]),
        ]
    }
};