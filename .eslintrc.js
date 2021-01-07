module.exports = {
  root: true,
  extends: '@react-native-community',
  plugins: ['import'],
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
        alias: {
          _assets: './src/assets',
          _components: './src/components',
          _routes: './src/routes',
          _screens: './src/screens',
          _stores: './src/stores',
          _utils: './src/utils'
        },
      },
    },
  },
};
