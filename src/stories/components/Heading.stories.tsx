import type { Meta, StoryObj } from '@storybook/react'
import { Heading } from '@/components'

const meta: Meta<typeof Heading> = {
  args: {
    children: 'Heading',
    color: 'dark',
    level: 1
  },
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6]
    }
  },
  component: Heading,
  tags: ['autodocs'],
  title: 'Components/Heading'
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
