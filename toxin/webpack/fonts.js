const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(){
    return {
        module: {
            rules: [
                {
                    test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
                    loader: 'file-loader',
                    options: {
                      name: '[name].[ext]',
                      publicPath: '../../',  // path to director where assets folder is located
                    }
                },
            ]
        },
        plugins: [
            new CopyWebpackPlugin([{
                from: `src/assets/fonts`,
                to: `./assets/fonts`
            }])
        ]
    }
}