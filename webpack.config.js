const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
    mode: 'production', // Set this to 'production' or 'development'
    entry: './scripts/script.js', // Your main JS file
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html',
            filename: 'index.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './about.html',
            filename: 'about.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './ecoglee.html',
            filename: 'ecoglee.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './emosign.html',
            filename: 'emosign.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './fabindia.html',
            filename: 'fabindia.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './finview.html',
            filename: 'finview.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './immersive.html',
            filename: 'immersive.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './mmi.html',
            filename: 'mmi.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './project.html',
            filename: 'project.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './superstitions.html',
            filename: 'superstitions.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './truble.html',
            filename: 'truble.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
        new HtmlWebpackPlugin({
            template: './visual.html',
            filename: 'visual.html',
            minify: {
                removeComments: true,
                collapseWhitespace: true,
            },
        }),
    ],
    optimization: {
        minimize: true,
        minimizer: [
            new TerserPlugin(),
            new CssMinimizerPlugin(),
        ],
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
        ],
    },
};
