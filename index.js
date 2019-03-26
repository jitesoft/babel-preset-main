const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils['declare'];

module.exports = declare((api) => {
    api.assertVersion(7);

    return {
        'presets': [
            [
                require('@babel/preset-env'),
                {
                    useBuiltIns: 'usage',
                    corejs: {version: 3, proposals: true},
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
                }
            ]
        ],
        'plugins': [
            [
                require('@babel/plugin-proposal-object-rest-spread'), {
                    loose: false,
                    useBuiltIns: true
                }
            ],
            [
                require('@babel/plugin-proposal-decorators'), {
                    decoratorsBeforeExport: true,
                    legacy: false
                }
            ],
            [
                require('@babel/plugin-transform-runtime'), {
                    absoluteRuntime: false,
                    corejs: {version: 3, proposals: true},
                    helpers: true,
                    regenerator: true,
                    useESModules: true // Webpack fixes this.
                }
            ],
            [
                require('@babel/plugin-proposal-partial-application'), {

                }
            ],
            [
                require('@babel/plugin-proposal-class-properties'), {
                    loose: false
                }
            ],
            [
                require('@babel/plugin-proposal-optional-chaining'), {
                    loose: false
                }
            ],
            [
                require('@babel/plugin-proposal-throw-expressions'), {
                    asyncGenerators: true,
                    generators: true,
                    async: true
                }
            ],
            [
                require('@babel/plugin-proposal-nullish-coalescing-operator'), {
                    loose: false
                }
            ],
            [
                require('@babel/plugin-proposal-private-methods'), {
                    loose: false
                }
            ]
        ]
    }
});
