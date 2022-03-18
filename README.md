# eslint-config-hometogo

## Getting Started

Create minimal required config in file `.eslintrc.js`:

```js
module.exports = {
    extends: ['hometogo']
};
```

### Architecture v2 support

To enable v2 architecture support, extend `hometogo/architecture-v2`.

```js
module.exports = {
    extends: ['hometogo', 'hometogo/architecture-v2']
};
```

If the codebase is structured in a standard way, this is all what is needed.
The standard way of structuring the codebase is:

```
src/apps/*/pages
src/apps/*/features
src/apps/*/models
src/apps/*/commons
src/features
src/models
src/commons
src/libs
```

All imports from v2 architecture modules should be prefixed with `@v2` alias.
