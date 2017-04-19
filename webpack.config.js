const path = require('path');
const pluginHtml = require('html-webpack-plugin');

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: {
        DEXTemplate: './DEXTemplate.less'
    },
    resolve: {
        modules: ['node_modules', 'bower_components']
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.less$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                    { loader: "less-loader" }
                ]
            }
        ]
    },
    plugins: [
        new pluginHtml({
            template: '../exemple/grid.html'
        }),
    ],
    devServer: {
        contentBase: path.resolve(__dirname, 'exemple'),
        compress: true,
        host: 'localhost',
        port: 4224
    }
}