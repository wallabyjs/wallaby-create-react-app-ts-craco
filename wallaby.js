module.exports = () => ({
  // tell wallaby to use automatic configuration
  autoDetect: true,

  // explicitly provide a jest configuration file
  testFramework: {
    configFile: "./jest.config.js"
  }
});