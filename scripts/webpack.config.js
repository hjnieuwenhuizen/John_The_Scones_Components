const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = (env, argv) => {
    const isProduction = argv.mode === 'production';

    return {
        entry: './src/index.tsx',
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
            splitChunks: {
                chunks: 'all',
                minSize: 20000,
                maxSize: 244000,
                minChunks: 1,
                maxAsyncRequests: 30,
                maxInitialRequests: 30,
                automaticNameDelimiter: '~',
                enforceSizeThreshold: 50000,
                cacheGroups: {
                    defaultVendors: {
                        test: /[\\/]node_modules[\\/]/,
                        priority: -10
                    },
                    default: {
                        minChunks: 2,
                        priority: -20,
                        reuseExistingChunk: true
                    }
                }
            }
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
                    './Input': './src/components/Input'
                    // Add more components to expose as needed
                },
                shared: {
                    react: {
                        eager: true,
                        singleton: true,
                        requiredVersion: '^18.2.0' // Specify the version of 'react' here
                    },
                    'react-dom': {
                        eager: true,
                        singleton: true,
                        requiredVersion: '^18.2.0' // Specify the version of 'react-dom' here
                    }
                }
            })
        ]
    };
};
