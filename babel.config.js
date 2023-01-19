module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        extensions: ['.tsx', '.ts', '.js', '.json', '.jsx'],
        alias: {
          '@components': './src/components',
          '@screens': './src/screens',
          '@styles': './src/styles',
          '@utils': './src/utils',
          '@navigation': './src/navigation',
        },
        include: ['NODE_ENV'],
      },
      'transform-inline-environment-variables',
    ],
  ],
};
