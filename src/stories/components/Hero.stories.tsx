import type { Meta, StoryObj } from '@storybook/react'
import { Hero } from '@/components'

const meta: Meta<typeof Hero> = {
  args: {
    avatar: {
      alt: 'Placeholder avatar',
      src: 'https://i.pravatar.cc/528'
    },
    action: {
      label: 'See my work',
      link: '/'
    },
    description: 'Agency provides a full service range including technical skills, design, business understanding.',
    subtitle: 'Felipe Uliana',
    title: 'The Simple, Clean Design'
  },
  component: Hero,
  tags: ['autodocs'],
  title: 'Components/Hero'
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}
