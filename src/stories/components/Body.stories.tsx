import type { Meta, StoryObj } from '@storybook/react'
import { Body } from '@/components'

const meta: Meta<typeof Body> = {
  args: {
    children: 'Body component as a paragraph.',
    color: 'dark',
    size: 'normal'
  },
  component: Body,
  tags: ['autodocs'],
  title: 'Components/Body'
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const MultipleBodies: Story = {
  render: (args) => (
    <>
      <Body {...args}>
        Venison tail tenderloin, reprehenderit tongue chuck ut sausage tempor landjaeger eu. Picanha ball tip buffalo ex kielbasa. Meatball sirloin eiusmod ham landjaeger, elit do prosciutto velit ut occaecat pancetta exercitation. Fugiat excepteur pork belly spare ribs, laborum sirloin occaecat frankfurter consequat jowl tri-tip eu pastrami. Tri-tip landjaeger jowl, beef kielbasa bacon cupidatat non spare ribs pig porchetta prosciutto. Jerky venison dolore ribeye ground round sunt biltong mollit quis eiusmod dolor chicken esse adipisicing.
      </Body>
      <Body {...args}>
        Buffalo non ribeye ut biltong duis ullamco eiusmod ham ipsum brisket dolor. Ground round burgdoggen dolore, kielbasa sed consectetur irure ipsum beef ribs biltong. Labore ipsum reprehenderit andouille leberkas. Ball tip jerky duis, alcatra in mollit deserunt ea in beef ribs ham hock tenderloin pork chop salami. Tri-tip meatball dolor, minim porchetta ex nostrud esse et pig eu pork ball tip sausage. Ham et doner chuck t-bone pastrami. Ullamco pork ea swine do, dolore filet mignon dolor exercitation t-bone pork loin.
      </Body>
    </>
  )
}
