const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

let plugins = [
    new HtmlWebpackPlugin({
        title: 'Webpack App',
        filename: 'index.html',
        template: 'src/template.html'
    })
];

if (process.env.NODE_ENV === 'development') {
    plugins.push(new BundleAnalyzerPlugin());
}

module.exports = {
    mode: 'development',
    entry: {
        path: path.resolve(__dirname,'src/index.js')
    },
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle[contenthash].js',
        clean: true,
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname,'dist')
        },
        port: 3000,
        open: true,
        hot: true,
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader','sass-loader'],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ]
    },
    plugins: plugins
};
