module.exports = {
  presets: [
    '@babel/preset-env',
    [
      '@babel/preset-typescript',
      {
        allExtensions: true,
        isTSX: true,
      },
    ],
  ],
  plugins: [
    [
      'parse-translation',
      {
        localesPath: './src/locales',
        unknownKeys: {
          't(networkName)': ['binanceSmartChain', 'huobiEcoChain', 'Polygon (Matic)'],
          't(explorerName)': ['viewOnBscscan', 'viewOnHecoInfo', 'MaticInfo'],
        },
      },
    ],
  ],
}
