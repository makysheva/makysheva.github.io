const path = require('path');

module.exports = function(){
    return{
        devServer: {
            stats: 'errors-only',
            contentBase: path.resolve(__dirname, 'build'),
            port: 9000,
        }
    }
};