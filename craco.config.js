const CracoLessPlugin = require('craco-less')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#6152f6' },
            javascriptEnabled: true
          }
        }
      }
    },
    { plugin: require('autoprefixer') },
    { plugin: require('tailwindcss') }
  ]
}
