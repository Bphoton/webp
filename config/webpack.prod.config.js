const path = require('path') //is?
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
let common = require('./webpack.common.config');

const __ROOT__ = process.cwd()

module.exports = { 
    ...common,
    mode: 'production',
    module: {
    ...common.module,
        rules: [
        ...common.module.rules,
            {
                test: /\.css$/gi, 
                exclude: /node_modules/gi,
                use: [
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {}
                    },
                    'css-loader'
                ]
            },
        ]
    },
    /** 
     * prod build actual files not representation of files
     * plugins need to be more explicit
     * get rid of --watch, prod only runs once
     * use prod server or live server */
    plugins: [
        ...common.plugins,
        new MiniCssExtractPlugin({
            filename: 'assets/[name].css',
            chunkFilename: 'assets/[id].css'
        }),
        new HtmlWebpackPlugin({
            template: path.resolve(__ROOT__,'src/tpl/index.html'),
        })
    ]

    
}

////////////////////////////////////////////////////////////////////////////////////
// comments for prod
////////////////////////////////////////////////////////////////////////////////////

// module.exports = {
//     module: { 
//             rules: [
//                 {
//                     test: /\.css$/gi, 
//                     exclude: /node_modules/gi,
//                     use: [
//                         {
//                             loader: MiniCssExtractPlugin.loader,
//                             options: {}
//                         },
//                         { // Equivalent to string
//                             loader: 'css-loader'
//                         },
//                         'css-loader'
//                     ],
//                     use: { //dont need
//                         loader: 'style-loader!css-loader'
//                     }
//                 },
//                 {
//                     test: /\.html$/gi,
//                     use: ['html-loader']

//                 }

//             ]
//         },
//         entry: {
//             main: './src/js/index.js',
//             // style: './src/css/main.css' //can have multiple entry points. It does slow things down
//         },
//         output: { 
//             path: path.resolve(__dirname, 'public'),
//             filename: 'assets/[name].bundle.js',
//             publicPath: ''
//         }
// }