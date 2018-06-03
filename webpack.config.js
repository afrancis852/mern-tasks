const path = require('path');

module.exports = {
    mode: 'development',
    devtool: 'source-map',
    context: path.join(__dirname, 'src'),
    entry: [
        './main.js'
    ],
    output: {
        path: path.join(__dirname, 'www'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: [
                    /node_modules/
                ],
                loader: 'babel-loader'
            }            
        ]
    },
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules')
        ]
    }
};