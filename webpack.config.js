const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;
const deps = require("./package.json").dependencies;

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.ts',
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: isProduction ? '[name].[contenthash].js' : '[name].bundle.js',
            publicPath: '/'
        },
        devServer: {
            static: path.resolve(__dirname, 'dist'),
            port: 3001
        },
        module: {
            rules: [
                {
                    test: /\.(ts|tsx)$/,
                    exclude: /node_modules/,
                    use: 'babel-loader'
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', '.jsx']
        },
        optimization: {
            splitChunks: false
        },
        plugins: [
            new CleanWebpackPlugin(),
            new HtmlWebpackPlugin({
                template: './public/index.html'
            }),
            new ModuleFederationPlugin({
                name: 'john_the_scones_components',
                library: { type: 'var', name: 'john_the_scones_components' },
                filename: 'remoteEntry.js',
                exposes: {
                    './Input': './src/components/Input/index.ts'
                    // Add more components to expose as needed
                },
                shared: {
                    react: {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps["react"]
                    },
                    'react-dom': {
                        eager: true,
                        singleton: true,
                        requiredVersion: deps["react-dom"]
                    }
                }
            })
        ]
    };
};
