const path = require('path');
const config = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: "[hash].js"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    // alias:{
    //     '@':path.resolve(__dirname,'src')
    // }
}
module.exports = config;
