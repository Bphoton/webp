module.exports = {
    presets:[
        "@babel/preset-typescript", 
        ["@babel/env", { "modules": false }]
    ],
    plugins: [
        "@babel/plugin-proposal-async-generator-functions",
        "@babel/plugin-proposal-class-properties",
        "@babel/plugin-proposal-object-rest-spread",
        "@babel/plugin-transform-async-to-generator",
        "@babel/plugin-transform-exponentiation-operator",
    ]
}