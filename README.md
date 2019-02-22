# storybook-demo-es6

## Project setup

```
npm install
```

### Compiles and hot-reloads for development

```
npm run serve
```

### Compiles and minifies for production

```
npm run build
```

### Run your tests

```
npm run test
```

### Lints and fixes files

```
npm run lint
```

### Run Storybook

```
npm run storybook
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).


## Testing and Coverage

The NPM scripts contained within [package.json](./package.json) detail the most common testing commands which are suitable for terminal and CI use.

```sh
# General test command, for CI
npm test

# Unit tests only
npm run test:unit

# E2E tests only, non-interactive
npm run test:e2e
```

### Unit Tests

The `npm run test:unit` command has 2 important flags:

- `-u`: Regenerate Jest snapshot (equivalent of setting `cache: false` in [jest.config.js](./jest.config.js)). Needed during active component development.
- `--coverage`: Outputs a coverage report in terminal, and to `/coverage/`

The generated coverage report can be viewed using the provided `http-server` package by running `npm run serve:coverage`.

Jest configuration is found at [jest.config.js](./jest.config.js).


### End-To-End Tests

The `npm run test:e2e` command has 1 important flag:

- `--headless`: Non-interactive mode

Running the command (`vue-cli-service test:unit -u`) without the `--headless` flag will open a visual UI, useful for test-driven development.

Cypress (E2E) configuration is found at [tests/e2e/plugins/index.js](./tests/e2e/plugins/index.js).

### Testing Documentation

- [Vue Test Utils API](https://vue-test-utils.vuejs.org/api/)
- [Testing Computed Properties](https://lmiller1990.github.io/vue-testing-handbook/computed-properties.html#testing-computed-properties)
- [Jest Configuration](https://jestjs.io/docs/en/configuration)
- [Cypress Configuration](https://docs.cypress.io/guides/references/configuration.html)


## References

Storybook integration inspired by https://habr.com/en/post/438354/ and adapted for pure-ES6 transpilation.
