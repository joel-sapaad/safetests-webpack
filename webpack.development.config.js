const path = require("path");

module.exports = {
  mode: "development",
  entry: ["./src/app.tsx", __dirname + "/src/app.scss"],
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.s[ac]ss$/i,
        exclude: /node_modules/,
        type: "asset/resource",
        generator: {
          filename: "bundle.css",
        },
        use: ["sass-loader"],
      },
    ],
  },
  plugins: [],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  devServer: {
    client: {
      logging: "info",
    },
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 9000,
    compress: true,
  },
};
