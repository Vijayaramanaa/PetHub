module.exports = {
    globals: {
      module: 'readonly',
    },
    extends: ['airbnb', 'prettier'],
    plugins: ['prettier'],
    rules: {
      'prettier/prettier': ['error'],
      'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
      'import/prefer-default-export': 'off',
      'react/react-in-jsx-scope': 'off',
    },
    env: {
      browser: true,
      node: true,
      es2021: true,
    },
  };
  