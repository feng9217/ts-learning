const path = require('path')

// 打包后生成index.html并自动引入加载的js文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 还引入了 webpack-dev-server 用于做热更新 注意版本 install时需要指定@3.11.X 默认装@4.X在当前环境下会报错

// 每次打包清空输出目录文件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
    // 入口文件(主文件)
    entry: './src/index.ts',
    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: 'bundle.js',
        // 环境配置 专门为ie环境取消掉箭头函数
        // environment: {
        //     arrowFunction: false
        // }
    },
    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定的是规则生效的文件
                test: /\.ts$/, // 匹配所有以ts结尾的文件
                // 要使用的loader 从后往前执行 写在最后的开始执行
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: 'babel-loader',
                        // 设置babel
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env", // 指定环境的插件
                                    // 配置信息
                                    {
                                        // 需要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "chrome": "80",
                                            "ie": "11"
                                        },
                                        // 指定corejs的版本
                                        "corejs": "3",
                                        // 使用corejs的方式
                                        "useBuiltIns": "usage", // usage按需加载
                                    }
                                ]
                            ]
                        }
                    },
                    // 'babel-loader',
                    'ts-loader'
                ],
                // 需要排除的文件/文件夹
                exclude: /node_modules/
            }
        ]
    },
    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: '自定义html的title'
        })
    ],
    // 用来设置引用模块 不设置build的时候对import export处理就会报错
    resolve: {
        extensions: ['.ts', '.js']
    }
}