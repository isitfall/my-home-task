module.exports = {
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpe?g|gif)$/i,
            use: [
                {
                    loader: 'url-loader',
                    options: {
                        limit: 8192,
                        name: 'images/[name].[ext]'
                    }
                }
            ]
        })

        return config
    }
}


// {
//     test: /\.(png|jpe?g|gif)$/i,
//     use: [
//         {
//             loader: 'url-loader',
//             options: {
//                 limit: 8192,
//                 name: 'images/[name].[ext]'
//             }
//         }
//     ]
// },
//     {
//         test: /.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
//             use: 'file-loader'
//     }