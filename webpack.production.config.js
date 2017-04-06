
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
    context: path.join(__dirname, 'src'),
    entry: [
        './main.js',
    ],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
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
                                minimize: true
                            }
                        },
                        {
                            loader: 'sass-loader',
                            options: {
                                minimize: true
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
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: { warnings: true }
        }),
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ],
    resolve: {
        modules: [
            path.join(__dirname, 'node_modules'),
        ],
    },
};

