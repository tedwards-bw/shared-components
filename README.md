# bandwidth-shared-components
Shared Component Library for Bandwidth React Apps

## [Documentation](http://dev.bandwidth.com/shared-components)

# How to use this library

Install the library as an NPM module. `npm i --save @bandwidth/shared-components`

Add the `BandwidthThemeProvider` to the root of your React component structure:

```javascript
import { BandwidthThemeProvider } from '@bandwidth/shared-components';

...

<BandwidthThemeProvider>
  <MyApp />
</BandwidthThemeProvider>
```

Now you can start including the components in your code. Require them by traversing the directory structure of the module:

```javascript
import { Button } from '@bandwidth/shared-components'`;
```

If you want to make this easier, you can alias the module in Webpack:

```javascript
resolve: {
  modules: ['node_modules'],
  alias: {
    'shared-components': '@bandwidth/shared-components',
  },
  extensions: ['.js', '.jsx'],
},
```

With this alias, you could just type:

```javascript
import { Button } from 'shared-components';
```

# Developing

To develop locally, run `npm run styleguide`. The docs should then be available at `http://localhost:6060`. Live reloading, etc should work as well.

Please refer to the [contributing guide](https://github.com/Bandwidth/shared-components/blob/master/.github/CONTRIBUTING.md) and read through the pull request template before submitting a PR!


## Linking shared components library

Viewing shared components library changes inside another project requires an additional linking step. You must link react from the project in development to shared components. This is due to the way React is loaded. 

**Shared Components Library**
```
npm link 
npm link <<your_project_root_directory>>/node_modules/react/
```

**Project in development**
```
npm link @bandwidth/shared-components
```

Once the links have been established you can follow the steps in the [Developing](#developing) section like normal. Changes will automatically be reflected in your development project.


# License

The source of this library is licensed under the MIT license (see [LICENSE](./LICENSE))

Bandwidth and the BW logo are trademarks of Bandwidth.com, Inc.  Bandwidth reserves all rights to these trademarks, as well as any others that may be included from time to time.
