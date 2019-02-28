const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
let common = require('./webpack.common.config'); 

const __ROOT__ = process.cwd()

// console.log({
//     __ROOT__,
//     __dirname,
//     subPath: 'src/tpl/index.html',
//     combinedDirname1: path.resolve(__dirname, '../src/tpl/index.html'),
//     combinedDirname2: path.resolve(__dirname, './src/tpl/index.html'),
//     combinedDirname4: path.resolve(__dirname, 'src/tpl/index.html'),
//     combinedDirname3: path.resolve(__dirname, '/src/tpl/index.html'),
//     combinedRootttt5: path.resolve(__ROOT__,'src/tpl/index.html')
// })

module.exports = {
    ...common,
    mode: 'development', 
    module: { 
    ...common.module,
        rules: [
            {
                test: /\.css$/gi, 
                exclude: /node_modules/gi,
                use: ['style-loader' ,'css-loader']
            }, 
            {
                test: /\.(ts|js)x?$/,
                exclude: /node_modules/gi,
                use: ['babel-loader']
            }
            // {
            //     test: /\.ts$/gi,
            //     exclude: /node_modules/gi,
            //     use: ['ts-loader']
            // }
        ]
    },
    /**
     * dont need css plugin since this is dev and we have
     * css-loader which creates file like string and
     * style-loader which loads the file like obj string into html
     * But in prod, we need to be more explicit with files   */
    plugins: [
    //...common.plugins,
        new HtmlWebpackPlugin({
            template: path.resolve(__ROOT__,'src/tpl/index.html'),
            showErrors: true
        })
    ],
    /** 
     * ??? */
    devtool: 'inline-sourcemap',
    // devServer: {
    //     /**
    //      * c This folder is served from server, aka server root 
    //      * c Production would use live server or custom prod server
    //      * p Have to choose a port
    //      * _ have to download webpack-dev-server*/ 
    //     contentBase: path.join(__ROOT__, 'public'),
    //     compress: true,
    //     port: 9000
    //   }

}

////////////////////////////////////////////////////////////////////////////////////
// comments for dev
////////////////////////////////////////////////////////////////////////////////////
//module.exports = {
    // entry: {
    //     main: './src/js/index.js',
    //     // style: './src/css/main.css' // Makes additional js file
    // },
    // output: { //tutorial with dif syntax
    //     path: __dirname,
    //     filename: 'bundle.js'
    // },
    // module: {
    //     loaders: [
    //         {test: /\.css$/,
    //         loader: 'style-loader!css-loader'}
    //     ]
    // }
    // module: { //need
    //     rules: [
    //         {
    //             test: /\.css$/gi, 
    //             exclude: /node_modules/gi,
    //             use: ['style-loader' ,'css-loader']
    //             // use: { //dont need
    //             //     loader: 'style-loader!css-loader'
    //             // }
    //         },
    //         // {
    //         //     test: /\.html$/gi,
    //         //     use: ['html-loader']
    //         // }
            
    //     ]
    // },
    // output: { //??? dont need this
    //     path: path.resolve(__dirname, 'public'),//??? dont need // is __dirname like 'root' of my project
    //     filename: 'assets/[name].bundle.js',//??? why dont i need this file at all
    //     publicPath: '' //???dont need //what is this
    // }
//}