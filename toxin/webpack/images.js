const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.(jpg|png|svg)$/,
                    loader: 'file-loader',
                    options: {
                        name: '[name].[ext]',
                        outputPath: 'assets/images',
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
