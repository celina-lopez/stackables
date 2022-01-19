var path = require('path');

module.exports = {
    mode: 'production',
    entry: './src/Stackables.js',
    output: {
        path: path.resolve('lib'),
        filename: 'Stackables.js',
        libraryTarget: 'commonjs2'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: 'babel-loader'
            }
        ]
    },
    externals: {
      "react": "commonjs react",
      "react-dom": "commonjs react-dom",
   }
}