const path = require('path');

module.exports = {
  entry: {
    main: './src/main.js'
  },

  output: {
    filename: 'bundle.js',  //  打包后输出文件的名称
    path: path.resolve(__dirname, 'dist')   //  输出文件夹
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react', 'stage-0'],
          }
        }
      },
      {
        // 图片格式正则
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        use: [
          {
            loader: 'url-loader',
            // 配置 url-loader 的可选项
            options: {
              // 限制 图片大小 10000B，小于限制会将图片转换为 base64格式
              limit: 10000,
              // 超出限制，创建的文件格式
              // build/images/[图片名].[hash].[图片格式]
              name: 'images/[name].[hash].[ext]'
            }
          }
        ]
      }
    ]
  }
};
