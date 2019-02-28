/**
 * integrate common code between prod and dev config
 * destructor the common.js config into prod and dev config*/
const path = require('path')
const __ROOT__ = process.cwd()

module.exports = {
    entry: {
        main: path.resolve(__ROOT__, `src/js/index.ts`)
    },
    output: {
        path: path.resolve(__ROOT__, 'public'),
        filename: 'assets/[name].bundle.js', //can name it whatever
        publicPath: ''
    },
    plugins: [],
    resolve: {
        alias: {
            '@css': path.resolve(__ROOT__, 'src/css'), //update here and ts.config and restart vscode window
            '@js': path.resolve(__ROOT__, 'src/js') 
        },
        extensions: ['.ts', '.tsx'],
        enforceExtension: false,
    }
}