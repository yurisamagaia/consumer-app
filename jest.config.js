module.exports = {
  preset: 'react-native',
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|svg)$': '<rootDir>/__mocks__/fileMock.js',
    'react-native-linear-gradient': '<rootDir>/__mocks__/react-native-linear-gradient.js',
  },
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|react-native-linear-gradient|@react-native-community|)/)',
  ],
};
