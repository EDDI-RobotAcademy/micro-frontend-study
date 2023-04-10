const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index",
  devServer: {
    static: path.join(__dirname, 'dist'),
    port: 3001,
  },
  output: {
    publicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: ['@babel/preset-react'],
        },
      },
    ],
  },
  plugins: [
	new HtmlWebPackPlugin({
	  template: './public/index.html'
	}),
    new ExternalTemplateRemotesPlugin(),
    new ModuleFederationPlugin({
        name: 'ReactModuleApp',
        remotes: {
            vueModuleApp: 'vueModuleApp@http://localhost:3002/remoteEntry.js',
        }
    })
  ]
};