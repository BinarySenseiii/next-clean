/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  plugins: ['prettier-plugin-tailwindcss'],
  printWidth: 80,
  arrowParens: 'avoid',
  bracketSameLine: true,
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'strict',
  jsxSingleQuote: true,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  semi: false,
  singleAttributePerLine: false,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'es5',
  useTabs: false,
}

export default config
