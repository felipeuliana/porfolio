import type { Meta, StoryObj } from '@storybook/react'
import { Caption } from '@/components'

const meta: Meta<typeof Caption> = {
  args: {
    children: 'Caption.',
    color: 'neutral',
    variant: 'small'
  },
  component: Caption,
  tags: ['autodocs'],
  title: 'Components/Caption'
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
