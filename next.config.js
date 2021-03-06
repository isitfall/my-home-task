module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
            use: 'file-loader'
        })

        return config
    }
}