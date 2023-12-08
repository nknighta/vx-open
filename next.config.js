const config = {
    webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
        // Note: we provide webpack above so you should not `require` it
        // Perform customizations to webpack config
        // Important: return the modified config
        config.module.rules.push({
            test: /\.svg$/,
            use: ["@svgr/webpack"]
        });
        config.module.rules.push({
            test: /\.(png|jpg|gif)$/i,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        limit: 8192
                    }
                }
            ]
        });

        return config;
    }
};

module.exports = config;