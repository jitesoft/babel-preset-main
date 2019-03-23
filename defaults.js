const defaults = {
    'preset-env': {
        useBuiltIns: 'usage',
        corejs: 3,
        targets: '> 0.25%, not dead, node > 8',
        spec: false,
        loose: false,
        modules: 'auto',
        debug: false,
        include: [],
        exclude: [],
        forceAllTransforms: false,
        configPath: process.cwd(),
        ignoreBrowserslistConfig: false,
        shippedProposals: false
    },
    'object-rest-spread': {
        loose: false,
        useBuiltIns: true
    },
    'class-properties': {
        loose: true
    },
    'throw-expressions': {

    },
    'private-methods': {
        loose: true
    },
    'optional-chaining': {
        loose: false
    },
    'nullish-coalescing-operator': {
        loose: false
    },
    'export-default-from': {

    },
    'decorators': {
        decoratorsBeforeExport: true,
        legacy: false
    },
    'transform-runtime': {
        absoluteRuntime: false,
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: true
    },
    'transform-regenerator': {
        asyncGenerators: false,
        generators: false,
        async: false
    },
    'partial-application': {

    }
};
