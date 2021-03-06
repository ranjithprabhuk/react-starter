
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'dev'),
        filename: 'bundle.js',
        publicPath: '/dev'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.jsx$/,
                exclude: /node_modules/,
                use: [
                    'babel-loader',
                ],
            },
            {
                test: /\.(scss|css)$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    loader: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: false
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                minimize: false
                            }
                        }
                    ],
                })
            }
        ]
    },

    plugins: [
        new ExtractTextPlugin({
            filename: "css/style.css",
            allChunks: true
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};

