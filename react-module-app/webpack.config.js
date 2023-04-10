const path = require("path");
const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin } = require('webpack').container;
const ExternalTemplateRemotesPlugin = require('external-remotes-plugin');

module.exports = {
  mode: "development",
  entry: "./src/index",
  output: {
	path: path.resolve(__dirname, "build"),
	port: 3001,
  },
  output: {
    punlicPath: 'auto',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: "/node_modules",
        use: "babel-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        exclude: /node_modules/,
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