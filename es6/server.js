const webpack = require("webpack");
const WebpackDevServer = require("webpack-dev-server");
const config = require("./webpack.config.js");

const compiler = webpack(config);
const devServer = config.devServer;
const server = new WebpackDevServer(compiler, devServer);

server.listen(devServer.port, "localhost", error => {
  if (error) console.log(error);
});
