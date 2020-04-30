const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract(
                    {
                      fallback: 'style-loader',
                      use: ['css-loader', 'sass-loader']
                    }
                                               )
            },
            {
                test: /\.(htm|html)$/,
                use: {
                    loader: "html-loader"
                }
            }
        ]
    },
    plugins: [
      new HtmlWebpackPlugin({
                              template: "./index.html"
                            }),
      new ExtractTextPlugin('style.css')
    ]
};
