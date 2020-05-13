const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: "development",
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'js/bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: [
                                '@babel/preset-env'
                            ]
                        }
                    }
                ],
            },
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
              },
            { test: /\.html$/, use: "html-loader" }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin(),
        new htmlWebpackPlugin({
            template: './src/index.html'
        })
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    },
}