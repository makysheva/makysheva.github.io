const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = function(){
    return {
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