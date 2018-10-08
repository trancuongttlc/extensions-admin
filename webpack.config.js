const webpack   = require('webpack');
const path      = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


// const BUILD_DIR = path.resolve(__dirname, 'client');
// const APP_DIR   = path.resolve(__dirname, 'client/app');

module.exports = {
    mode: 'development',
    entry: {
        c: './client/app',
        r: ['react', 'react-router', 'react-dom'],
        l: ['store', 'underscore']
    },
    output: {
        path: __dirname + '/build',
        filename: '[name].[hash].js',
        chunkFilename: '[name].[hash].js'
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx', '.css', '.scss'],
        alias: {
            actions: path.resolve('./client/app/actions'),
            api: path.resolve('./client/app/api'),
            components: path.resolve('./client/app/components'),
        }
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