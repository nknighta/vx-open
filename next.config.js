const withBundleAnalyzer = require('@next/bundle-analyzer')({
	  enable: process.env.ANALYZE === 'false',
})
module.exports = withBundleAnalyzer({})
