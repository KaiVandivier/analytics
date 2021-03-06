module.exports = function(api) {
    let defaultPresets

    if (process.env.BABEL_ENV === 'modules') {
        defaultPresets = []
    } else {
        defaultPresets = [
            [
                '@babel/preset-env',
                {
                    modules: 'commonjs',
                },
            ],
        ]
    }

    let styledJsxPlugin
    if (api.env(['test'])) {
        styledJsxPlugin = 'styled-jsx/babel-test'
    } else {
        styledJsxPlugin = ['styled-jsx/babel', { optimizeForSpeed: true }]
    }

    return {
        presets: defaultPresets.concat('@babel/preset-react'),
        plugins: [
            '@babel/plugin-proposal-class-properties',
            '@babel/plugin-proposal-object-rest-spread',
            '@babel/plugin-transform-react-constant-elements',
            '@babel/plugin-transform-shorthand-properties',
            '@babel/plugin-transform-runtime',
            '@babel/plugin-proposal-optional-chaining',
            '@babel/plugin-proposal-nullish-coalescing-operator',
            styledJsxPlugin,
        ],
    }
}
