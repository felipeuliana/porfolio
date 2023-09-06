import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '@/components'

const meta: Meta<typeof Button> = {
  args: { children: 'Button' },
  argTypes: { onClick: { action: 'clicked' } },
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button'
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
