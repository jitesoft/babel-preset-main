const defaults = {
    'presetEnv': {
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
    'objectRestSpread': {
        loose: false,
        useBuiltIns: true
    },
    'classProperties': {
        loose: true
    },
    'throwExpressions': {},
    'privateMethods': {
        loose: true
    },
    'optionalChaining': {
        loose: false
    },
    'nullishCoalescingOperator': {
        loose: false
    },
    'exportDefaultFrom': {},
    'decorators': {
        decoratorsBeforeExport: true,
        legacy: false
    },
    'transformRuntime': {
        absoluteRuntime: false,
        corejs: 3,
        helpers: true,
        regenerator: true,
        useESModules: true
    },
    'transformRegenerator': {
        asyncGenerators: false,
        generators: false,
        async: false
    },
    'partialApplication': {}
};

module.exports = (options) => {
    return Object.assign(defaults, options);
};
