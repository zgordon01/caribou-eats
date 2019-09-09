const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');


module.exports = merge(common, {
    mode: 'production',
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: false
        })
    ],
    output: {
        path: path.resolve(__dirname, 'dist')
    }
});
