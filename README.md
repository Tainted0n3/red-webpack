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

## Key

- **STC** = Subject to change

## What about so and so?

**@babel/cli** - Not neccessary as we are using webpack to coordinate the build process.

**@babel/polyfill** - Again not necessary as we have not yet specified an application for our application.

**eslint** - ESLint has many configuration options itself including whether we are a CommonJS or module based application. Are we a Node app or a Web app? Are we using TypeScript? What about presets like AirBnB or Google? Do we just want help with syntax or do we want to enforce coding standards? As we have not yet specified any roles for this application then there is no need to burden it and it's developers with meaningless, endless linting errors.

**jest** - Seriously considering this one. With testing becoming more ubiquitous by the day (as it should be) Jest is reliable and cooperates well with babel but has other considerations to take into account when using it alongside webpack. **i.e We have to transpile our modules into CommonJS instead but only in the test environment**

- We would need to handle static assets for setting up mocks.
- Mocking CSS modules with with identity-obj-proxy.
- Do we want to use the babel-jest package?
- Configure jest to find our files.
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

# Configuration and design decisions

Configuration files for babel and webpack in JS format rather than JSON, this lets us export values so they are visible elsewhere during the setup within `webpack.config.js` and `babel.config.js`

## webpack.config.js

As described above the `mode` is set via the command line argument form the npm script.

Our default and **only** entry point is set to `./src/app.js`.

- I have opted not to set multiple entry points as this will add a further layer of complexity to the configuration.

Build output is defaulted to `./dist`. All files are set to end up here with no segregation in a file called `bundle.js`.

- This value is now stored in `const distributionDirectory`.

- No filenames are currently hashed so no cache-busting by default. **STC**

### Modules

The only module installed and cofigured to run is `babel-loader`.

- Looks for all `.js` and `.mjs` files excluding those in `node_modules`.

### Plugins

Similarly the only plugin installed in the `clean-webpack-plugin`.

- Removes all files inside of the folder defined in `output.path` as well as any unused webpack assets.

### Dev Server

The dev server is currently set to serve content from the same directory specified in `output.path`.

- This has been consolidated into `const distributionDirectory` so that it can be used by both `output` and `devServer`.

[] Finish this!

## babel.config.js

Uses @babel/preset-env to allow us to use all the latest and greatest JavaScript functionality within our codebase via preset-env.

`targets.browsers` **STC**. For full details see [browserlist integration](https://babeljs.io/docs/en/babel-preset-env#browserslist-integration).

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

# QoL additions

These are features that have come to mind during the implemenation process that I feel would benefit being in this repo rather than hinder it. All of these items are **STC**

[] Configuration for `node` or `web` type application
[] Defaults for webpack-dev-server i.e open on run etc
