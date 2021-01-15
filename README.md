# wallaby-create-react-app craco

This project provides a sample configuration of using Wallaby with [craco](https://github.com/gsoft-inc/craco).

Wallaby has first class integration with `create-react-app`'s `react-scripts` and works with both `react-scripts` and with ejected applications. 

If you're **not** using react-scripts, which is the case for [craco](https://github.com/gsoft-inc/craco), Wallaby defaults to the same behavior 
as running `npx jest` CLI command from your project root. Without a `jest.config.js` file, `npx jest` will not pick up any [craco](https://github.com/gsoft-inc/craco) 
configuration overrides.

The [craco](https://github.com/gsoft-inc/craco) docs describe how to create a `jest.config.js` file.

**jest.config.js**
```javascript
const { createJestConfig } = require("@craco/craco");

const cracoConfig = require("./craco.config.js");
const jestConfig = createJestConfig(cracoConfig);

module.exports = jestConfig;
```

**craco.config.js**
```javascript
module.exports = {
  jest: {
    configure: {
      globals: {
        CONFIG: true,
      },
    },
  },
};
```

The steps above are enough to get `npx jest` to work from the CLI but because of some [craco](https://github.com/gsoft-inc/craco) internals 
that are overriding default node.js module imports, Wallaby requires that the configuration file location be explicitly provided. 
This isn't normally required (Wallaby will use the  `jest.config.js`), but is special case for [craco](https://github.com/gsoft-inc/craco).

To run Wallaby with craco, you must create a `wallaby.js` configuration file (both shown below). If you create
You will also need to ensure that you are running Wallaby from a configuration file and not using automatic configuration. 
Read more about selecting a configuration file in [our docs](https://wallabyjs.com/docs/intro/config.html).

**wallaby.js**
```javascript
module.exports = () => ({
  // tell wallaby to use automatic configuration
  autoDetect: true,

  // provide the configuration file
  testFramework: {
    configFile: "./jest.config.js"
  }
});
```