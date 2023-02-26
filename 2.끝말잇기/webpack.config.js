const path = require('path');

module.exports = {
  name: 'wordrelay-setting',
  mode: 'development', // 실 서비스: production
  devtool: 'eval',
  resolve: {
    extensions: ['.ts', '.js', '.jsx'],
  },

  // 입력
  entry: {
    app: ['./client'],
  },

  // entry에 있는 파일들을 적용
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],

        },
      },
    ],
  },

  // 출력
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js',
  }
}