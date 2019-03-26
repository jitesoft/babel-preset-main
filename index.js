const helperUtils = require('@babel/helper-plugin-utils');
const declare = helperUtils['declare'];

module.exports = declare((api, options) => {
    api.assertVersion(7);

    const {
        modules,
        mode
    } = options;

    let {
        targets
    } = options;

    if (targets === undefined) {
        targets = '> 0.25%, not dead, node >= 8';
        if (mode === 'web') {
            targets = '> 0.25%, not dead'
        } else if (mode === 'node') {
            targets = 'node >= 8'
        }
    }

    return {
        'presets': [
            [
                require('@babel/preset-env'),
                {
                    useBuiltIns: 'usage',
                    corejs: {version: 3, proposals: false},
                    targets: targets,
                    modules: modules === undefined ? 'auto' : modules
                }
            ]
        ],
        'plugins': [
            [
                require('@babel/plugin-proposal-object-rest-spread'), {
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
                    corejs: {version: 3, proposals: true}
                }
            ],
            require('@babel/plugin-proposal-partial-application'),
            require('@babel/plugin-proposal-class-properties'),
            require('@babel/plugin-proposal-optional-chaining'),
            require('@babel/plugin-proposal-throw-expressions'),
            require('@babel/plugin-proposal-nullish-coalescing-operator'),
            require('@babel/plugin-proposal-private-methods')
        ]
    }
});
