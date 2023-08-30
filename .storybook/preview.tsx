import React from 'react'
import type { Preview } from '@storybook/react'
import { getFontsAsVariables } from '../src/utils/fonts'
import '../src/styles/globals.css'

const fontsVariables = getFontsAsVariables()

const preview: Preview = {
  decorators: [
    (Story) => (
      <div className={fontsVariables}>
        <Story />
      </div>
    )
  ],
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#3e3e4a'
        },
        {
          name: 'light',
          value: '#f6f7f6'
        }
      ]
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
