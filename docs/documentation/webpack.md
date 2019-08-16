# Webpack

## entry
- 可以是单个文件
- 可以是数组，会生成一个文件
- 可以是对象，按命名生成文件
- `app`
- `vendor`

## output
- `filename` 设置文件名字，可使用 `[hash],[name]` 字段

## module
- `rules` 数组，转换规则
  - `test` 正则匹配符合规则的文件
  - `exclude` 正则需要过滤掉的文件
  - `use` 对象/数组(字符串/对象)
    - `loader`
      - 从右往左顺序执行
      - css `css-loader`, `style-loader`
      - js `babel-loader`
      - image `url-loader` (小图片会被转换为base64)
    - `options`

## plugins `Array`
- `uglifyjs-webpack-plugin` 压缩js代码
- `html-webpack-plugin` 生成新的html
- `open-browser-webpack-plugin` 打开浏览器
- `webpack.DefinePlugin` 定义全局变量
- `webpack.optimize.CommonsChunkPlugin` 拆分公共模块，v4中被`SplitChunksPlugin` 替代 单个文件的可以 放到`vendor`中
- `ProvidePlugin`


## externals



---
- `npx` 执行可以在执行时下载包 
- `require.ensure` 分包加载，已被`import`替代
- `bundle-loader` 
