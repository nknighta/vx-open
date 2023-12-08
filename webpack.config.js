const withImages = require('next-images')
const withOptimizedImages = require('next-optimized-images');
const withPlugins = require('next-compose-plugins');

module.exports = withPlugins([
  [withImages],
  [withOptimizedImages, {
    // 画像の最適化のオプション
    optimizeImagesInDev: true,
    mozjpeg: {
      quality: 80,
    },
    pngquant: {
      speed: 3,
      strip: true,
      verbose: true,
    },
    svgo: {
      // svgoの設定
    },
    gifsicle: { 
      optimizationLevel: 3,
    },
    webp: {
      preset: 'default',
      quality: 75,
    },
  }],
], {
  webpack: (config, { isServer }) => {
    // チャンクの最適化
    if (!isServer) {
      config.optimization.splitChunks.cacheGroups.commons.minChunks = 2;
    }
    return config;
  },
});
