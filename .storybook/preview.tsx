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
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    }
  }
}

export default preview
