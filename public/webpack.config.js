const path = require('path');
module.exports = {
  target: ['web', 'es5', 'es6'],
  //mode: "production",  // Uncomment for prod
  mode: "development",  // Necessary for dev mode, comment for prod
  entry: './../src_frontend/run.ts',  // Typescript entry point
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  output: {
    filename: 'app.js',
    path: path.resolve(__dirname, 'js'),
    //sourceMapFilename: "main.js.map"
  },
  /**
   * Source maps are critical when debugging typescript files
   * https://webpack.js.org/configuration/devtool/
   * inline-source-map
   * eval-source-map
   */
  devtool: "inline-source-map",  // We don't want source maps in production
  module: {
    rules: [
      {
        test: /\.m?ts$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-typescript'],
            cacheDirectory: true,
          }
        }
      }
    ]
  }
};