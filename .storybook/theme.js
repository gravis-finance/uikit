import { create } from '@storybook/theming'
import packageJson from '../package.json'

export default create({
  base: 'light',
  brandTitle: `gravis-finance ${packageJson.version}`,
  brandUrl: 'https://github.com/gravis-finance/uikit',
})
