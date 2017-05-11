var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: {
        publicApp: './js/init-public.js',
        userApp: './js/init-user.js',
        vendors: ['jquery'],
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: "[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015']
                }
            }
        ]
    },
    stats: {
        colors: true
    },
    devtool: 'source-map',
    plugins: [
        new webpack.DefinePlugin({
            app: {
                environment: JSON.stringify(process.env.APP_ENV || 'development')
            }
        })
    ]
 };