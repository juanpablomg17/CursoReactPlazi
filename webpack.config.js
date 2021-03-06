const path = require('path')
const HtmlWebPackPlugin = require('html-webpack-plugin') 
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        open: true,
        hot: true,
        port: 8081
    },
    mode: 'development',
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: { 
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(s*)css$/,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader
                    },
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.(png|gif|jpg)$/,
                use: [
                  {
                    loader: 'file-loader',
                    options: { name: 'assets/[hash].[ext]' },
                  }
                ],
              },
        ]
    },

    // ESTO SIRVE PARA DECIRLE A WEBPACK QUE VOY A TRABAJR CON RUTAS
    devServer:{
        historyApiFallback: true,
    },
    plugins: [ 
        new HtmlWebPackPlugin({
            template: 'public/index.html',
            filename: 'index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'assets/[name].css'
        })
    ]
}