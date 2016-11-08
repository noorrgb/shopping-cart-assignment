const webpack = require('webpack');
var nodeExternals = require('webpack-node-externals');

module.exports = [
    {
    entry: './app.js',
    output: {
        path: './',
        filename: 'server.bundle.js',
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    target: 'node',
    externals: [nodeExternals(),{
        "jquery": "jQuery"
    }],
    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            jquery: "jquery/src/jquery"
        }
    }
    //If you want to minify your files uncomment this
    // ,
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({
    //         compress: {
    //             warnings: false,
    //         },
    //         output: {
    //             comments: false,
    //         },
    //     }),
    // ]
    },
    {
        entry: './views/index.js',
        output: {
            path: './bin',
            filename: 'app.bundle.js',
        },
        module: {
            loaders: [{
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015', 'stage-1']
                }
            },
                { test: /vendor\/.+\.(jsx|js)$/,
                    loader: 'imports?jQuery=jquery,$=jquery,this=>window'
                }]
        },
        resolve: {
            extensions: ['', '.js', '.jsx']
        }

        //If you want to minify your files uncomment this
        // ,
        // plugins: [
        //     new webpack.optimize.UglifyJsPlugin({
        //         compress: {
        //             warnings: false,
        //         },
        //         output: {
        //             comments: false,
        //         },
        //     }),
        // ]
    }
]
