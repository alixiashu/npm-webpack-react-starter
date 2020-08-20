const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader',
                ]  
            },
            {
                test: /\.(js|jsx)$/,
                use: [
                        {
                            loader: 'babel-loader',
                            options:
                            {
                                presets: ["@babel/preset-env", "@babel/preset-react"] 
                            }
                        }
                    ]
            }
        ]
    },
    resolve: {
        extensions: ['*', '.js', '.jsx']
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: __dirname + '/dist/index.html',
    //         filename: 'index.html',
    //         inject: 'body'
    //     })
    // ]
};
