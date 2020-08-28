const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = function(env){
    isDev = env === 'development'
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    exclude: [path.resolve(__dirname, 'assets/favicons')],
                    options: {
                        name: '[name].[ext]',
                        outputPath: '/assets/images/',
                        publicPath: isDev ? '/assets/images/' : '/toxin/build/assets/images/'
                    },
                },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([
                {
                    from: 'src/assets/img',
                    to: './assets/images'
                },
            ]),
        ]
    }
};
