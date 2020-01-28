# RED-WEB Webpack Starter

Base implementation of webpack, to be used as starting point for any webpack enabled project. Designed to be as lightweight a starting point as possible, with as few defaults set as possible. Any that are should be reasonable assumptions and are documented below for ease of change.

This project includes:

- Webpack 4
  - Includes webpack-cli for launching webpack via the npm scripts.
  - As well as webpack-dev-server for obvious reasons.
  - Also clean-webpack-plugin for keeping the directory clean between builds.
- Babel 7
  - Includes @babel/core and @babel/preset-env to target the latest and greatest Javascript has to offer.
  - Also babel-loader for Webpack integration.
- npm-run-all
  - Included to create a consistent experience for 'nix and Windows environments as Windows does not recognise the `&&` syntax.
  - Also allows us to run npm scripts sequentially or in parallel.

## What about so and so?

**@babel/cli** - Not neccessary as we are using webpack to coordinate the build process.

**eslint** - ESLint has many configuration options itself including whether we are a CommonJS or module based application. Are we a Node app or a Web app? Are we using TypeScript? What about presets like AirBnB or Google? Do we want to just help with syntax or do we want to enforce coding standards? As we have not yet specified any roles for this application then there is no need to burden it and it's developers with meaningless, endless linting errors.

**jest** - Seriously considering this one. Testing is becomming more ubiquitous (as it should be) and Jest is reliable and cooperates well with babel but has other considerations to take into account when using it alongside webpack. **i.e We have to transpile our modules into CommonJS instead but only in the test environment**

- We would need to handle static assets for setting up mocks
- Mocking CSS modules with with identity-obj-proxy
- Do we want to use the babel-jest package
- Configure jest to find our files
- Do we want to use **TypeScript?**
- Full info @ [Jest with Webpack](https://jestjs.io/docs/en/webpack)

**TypeScript** - Yes but not here, once this repo is fundamentally sound, there will be little reason to modify it further, other than some minor tweaks to some defaults, so I plan to add either a TypeScript branch or create a second repo based off of this one and implement it there.

# Getting started

Clone this repo `git clone git@github.com:Tainted0n3/red-webpack.git my-new-webpack-app`

Navigate to the root directory of the project and run `(npm|yarn) install`

Run one of the following npm scripts to get up and running:

- `yarn dev:build` - runs webpack in development mode.
- `yarn dev:watch` - sets webpack to watch in development mode.
- `yarn dev:serve` - runs webpack-dev-server in developemnt mode. (yes i know that sounds redundant, but it actually has implications).
  - We are using the `mode` argument to set the value within `webpack.config.js`, this config file is also used by webpack-dev-server, so as such it requires that this value be in the arguments.
  - When set to production mode webpack minimizes the the output file making debugging more difficult.
- `yarn prod:build` - runs webpack in production mode.
- `yarn prod:serve` - runs webpack-dev-server in production mode.

# Configuration and design choices

Configuration files in JS format rather than JSON, this lets us export values so they are visible elsewhere during the setup.

## webpack.config.js

## babel.config.js

Uses the the following preset:

```javascript
const presets = [
  [
    '@babel/preset-env',
    {
      targets: {
        browsers: ['last 2 versions', 'safari >= 7']
      }
    }
  ]
];
```
