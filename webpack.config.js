"use strict";

module.exports = {
    entry: "./src/scripts/entry.js",

    output: {
        path: __dirname,
        filename: "bundle.js"
    },

    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: [
                    __dirname + '/node_modules'
                ],
                loader: 'jshint-loader!jsx-loader'
            }
        ]
    },

    devtool: 'eval'
};
