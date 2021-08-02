/**
 * webpack.config.js webpack的配置文件
 * 作用： 指示webpack干哪些活（当你运行webpack 指令时， 会加载里面的配置）
 * 所有构建工具都是基于node.js运行~模块化默认采用commonjs;
 */
//resolve是用来破解绝对路径的方法
const { resolve } = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

//webpack配置
module.exports = {
    //入口起点
    entry: './src/index.js',
    //输出
    output: {
        // 输出文件名
        filename: 'built.js',
        // 输出路径

        //__dirname nodejs的变量，代表当前文件的目录的绝对路径
        path: resolve(__dirname, 'build')

    },
    module: {
        rules: [
            //详细loader配置
            {
                //匹配哪些文件
                test: /\.less$/,
                use: [
                    //use数组中loader执行顺序： 从右到左， 从下到上依次执行 
                    //创建style标签， 将js中的样式资源插入其中，添加到head中生效
                    'style-loader',
                    //将css文件变成commonjs模块加载到js中，里面内容是样式字符串
                    'css-loader',
                    'less-loader'
                ]
            }, {
                test: /\.(jpg|png|gif)$/,
                loader: 'url - loader',
                options: {
                    limit: 3 * 1024
                }
            }
        ]
    },
    //plugins的配置
    plugins: [
        //详细plugins的配置
        new HtmlWebpackPlugin({
            template: './src/index.html',
        })
    ],
    //模式
    // mode: 'production'
    mode: 'development' //开发模式
}