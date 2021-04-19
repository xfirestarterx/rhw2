module.exports = {
  moduleNameMapper: {
    '\\.(ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|styl)$': 'identity-obj-proxy'
  },
  moduleDirectories: ['node_modules', 'src'],
  collectCoverageFrom: [
    '**/src/**/*.{js,jsx}',
  ],
  transform: {
    "^.+\\.jsx?$": "babel-jest",
    "\\.(jpg|jpeg|png|gif|webp|svg)$": '<rootDir>/fileTransformer.js',
  },
  moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'png', 'jpg']
}
