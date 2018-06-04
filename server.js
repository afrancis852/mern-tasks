const express = require('express');
const path = require('path');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpack = require('webpack');
const webpackConfig = require('./webpack.config');

const app = express();

const compiler = webpack(webpackConfig);

app.use(express.static(path.join(__dirname , 'www')));

app.use(webpackDevMiddleware(compiler, {
    hot: true,
    publicPath: webpackConfig.output.publicPath,
    filename: 'bundle.js',
    stats: {
        colors: true
    },
    historyApiFallback: true
}));

app.use(webpackHotMiddleware(compiler, {
    log: console.log()
}));

const server = app.listen(3000, function() {
    console.log('Servidor escuchando en localhost:3000');
});