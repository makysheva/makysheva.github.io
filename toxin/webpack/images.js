const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(){
    return {
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

            new CopyWebpackPlugin([
                {
                    from: 'src/assets/img',
                    to: './assets/images'
                },
            ]),
        ]
    }
};