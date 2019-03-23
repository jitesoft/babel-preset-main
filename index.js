module.exports = (options) => {

    const opts = require('./defaults')(options);
    return {
        'presets': [
            [ require('@babel/preset-env'), opts['preset-env'] ]
        ],
        'plugins': [
            [ require('@babel/plugin-proposal-object-rest-spread'), opts['object-rest-spread'] ],
            [ require('@babel/plugin-proposal-decorators'), opts['decorators'] ],
            [ require('@babel/plugin-transform-runtime'),  opts['transform-runtime'] ],
            [ require('@babel/plugin-proposal-partial-application'), opts['partial-application'] ],
            [ require('@babel/plugin-proposal-class-properties'), opts['class-properties'] ],
            [ require('@babel/plugin-proposal-optional-chaining'), opts['optional-chaining'] ],
            [ require('@babel/plugin-proposal-throw-expressions'), opts['throw-expressions'] ],
            [ require('@babel/plugin-proposal-nullish-coalescing-operator'),  opts['nullish-coalescing-operator']],
            [ require('@babel/plugin-proposal-private-methods'),  opts['private-methods']]
        ]
    }
};
