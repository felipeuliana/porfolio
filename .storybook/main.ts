import path from 'path'
import type { StorybookConfig } from '@storybook/nextjs'

const config: StorybookConfig = {
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-onboarding',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-styling',
      options: {
       postCss: true
     }
    }
  ],
  docs: {
    autodocs: 'tag'
  },
  framework: {
    name: '@storybook/nextjs',
    options: {}
  },
  stories: [
    '../src/**/*.mdx',
    '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'
  ],
  webpackFinal: async (config) => {
    if (config.resolve) {
      config.resolve.alias = {
        ...config.resolve.alias,
        '@': path.resolve(__dirname, '../src')
      }
    }

    return config
  }
}

export default config
