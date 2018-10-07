const withFragment = require('@traveloka/fragment/razzle');
const { BundleAnalyzerPlugin } = require( "webpack-bundle-analyzer" );

module.exports = withFragment({
  modify(config, { target, dev}, webpack) {
    if (target === 'web' && !dev) {
      config.plugins.push( new BundleAnalyzerPlugin( {
        analyzerMode: "static",
        reportFilename: "../../webpack-report.html",
        openAnalyzer: false,
      } ) );
      
    }
    console.log('optimzation', target, dev, config.optimization)
    return config;
  }
});
