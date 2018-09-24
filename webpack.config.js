const webpack   = require('webpack');
const path      = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// const BUILD_DIR = path.resolve(__dirname, 'client');
// const APP_DIR   = path.resolve(__dirname, 'client/app');

module.exports = {
    entry: './client/app/index.js',
    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js|\.jsx?$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            { test: /\.(jpe?g|png|gif|svg)$/i, loaders: ['url', 'img'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './client/index.html'
        })
    ]

};