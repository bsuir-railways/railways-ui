const path = require('path');

const CopyWebpackPlugin = require('copy-webpack-plugin');

const sourceDirectory = path.resolve(__dirname, 'src');
const publicDirectory = path.resolve(__dirname, 'public');
const distributionDirectory = path.resolve(__dirname, 'dist');

const sourceFilesExtension = /\.js$/;

module.exports = {
    entry: path.resolve(sourceDirectory, 'index.js'),
    output: {
        path: distributionDirectory,
        filename: 'bundle.js'
    },

    devtool: 'source-map',

    module: {
        rules: [
            {
                test: sourceFilesExtension,
                loader: 'babel-loader',
                include: sourceDirectory
            },
            {
                test: sourceFilesExtension,
                loader: 'ng-annotate-loader',
                enforce: 'post'
            },
            {
                test: sourceFilesExtension,
                loader: 'eslint-loader',
                include: sourceDirectory,
                enforce: 'pre',
                options: {
                    failOnWarning: false,
                    failOnError: true
                }
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    'less-loader'
                ]
            },
            {
                test: /.html$/,
                loader: 'html-loader'
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            {
                from: publicDirectory
            }
        ])
    ],

    devServer: {
        port: 8000,
        inline: true,
        historyApiFallback: true,
        contentBase: distributionDirectory
    }
};
