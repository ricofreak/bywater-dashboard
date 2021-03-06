const path = require( 'path' );
const CopyWebpackPlugin = require( 'copy-webpack-plugin' );
const BeepPlugin = require( 'webpack-beep-plugin' );

module.exports = {
    entry: [
        './ui/supportal.js',
    ],

    module: {
        rules: [
            {
                test: /\.js$/,
                use: [
                    'babel-loader',
                ],
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ],
            },
            {
                test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff',
            },
            {
                test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader',
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                loaders: [
                    'file-loader', {
                        loader: 'image-webpack-loader',
                    },
                ],
            },
        ],
    },

    devtool: 'source-map',
    devServer: {
        contentBase: path.join( __dirname, 'templates', 'main' ),
        port: 2970,
    },

    output: {
        path: path.resolve( __dirname, 'ui/build' ),
        filename: 'bundle.js',
    },

    plugins: [
        new CopyWebpackPlugin( [
			{ from: 'templates/main/', to: '' },
        ] ),
        new BeepPlugin(),
    ],
};
