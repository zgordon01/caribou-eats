const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cryptoRandomString = require('crypto-random-string');

module.exports = {
    entry: './src/index.js',
    plugins: [
        new HtmlWebpackPlugin({
            hash: true,
            inject: 'body',
            template: 'public/index.html',
            filename: 'index.html'
        })
    ],
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(gif|png|jpe?g|svg|ico|woff|woff2)$/i,
                loader: 'file-loader?name=[name].[ext]'
            },
            {
                type: 'javascript/auto',
                test: /\.(json)$/,
                loader: 'file-loader?name=[name].[ext]'
            }
        ]
    },
    output: {
        filename: `${cryptoRandomString(25)}.js`
    }
};
