const webpack = require('webpack')
const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.jsx',
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/public'
    },
    devServer: {
        port: 8084,
        contentBase: './public',
    },
    resolve: {
        extensions: [' ', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules',
            src: __dirname + '/src',
            jquery: 'modules/admin-lte/bower_components/jquery/dist/jquery.min.js',
            bootstrap: 'modules/admin-lte/bower_components/bootstrap/js/bootstrap.min.js'
        }    
    },  
    plugins: [
        new MiniCssExtractPlugin({filename:'app.css'}),
        new webpack.ProvidePlugin({
            $: 'jquery',
            Jquery: 'jquery',
            'window.jQuery': 'jquery'
        })
    ], 
    module: {
        rules: [{
            test: /.js[x]?$/,
            loader: 'babel-loader',
            exclude: '/node_modules',
            options: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        },{
            test: /\.css$/,
            use: 
            [
                MiniCssExtractPlugin.loader,
                'css-loader',
            ]
        }, {
            test: /\.woff|.woff2|.ttf|.eot|.svg|.png|.jpg*.*$/,
            use: ['file-loader']
        }]
    }
}