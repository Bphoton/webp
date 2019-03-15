/**
 * integrate common code between prod and dev config
 * destructor the common.js config into prod and dev config*/
const path = require('path')
const __ROOT__ = process.cwd()

module.exports = {
    entry: {
        main: path.resolve(__ROOT__, `src/main/js/index.ts`),
        flash: path.resolve(__ROOT__, `src/flash/js/index.ts`)
    },
    output: {
        path: path.resolve(__ROOT__, 'public'),
        filename: '[name]/js/app.js', //[flash | main]
        publicPath: ''
    },
    plugins: [],
    resolve: {
        alias: {
            '@main': path.resolve(__ROOT__, 'src/main'),
            '@flash': path.resolve(__ROOT__, 'src/flash'),
            '@utils': path.resolve(__ROOT__, 'src/utils'),
            // '@css': path.resolve(__ROOT__, 'src/main/css'), //update here and ts.config and restart vscode window
            // '@js': path.resolve(__ROOT__, 'src/main/js') 
        },
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        enforceExtension: false,
    }
}