module.exports = function(){
    return{
        devServer: {
            stats: 'errors-only',
            contentBase: './build',
            port: 9000
        }
    }
};