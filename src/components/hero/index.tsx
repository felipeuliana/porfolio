import Image from 'next/image'
import { Body, Heading } from '@/components'
import { type JSX } from 'react'

interface HeroAvatarProps {
  alt: string
  height?: number
  src: string
  width?: number
}

interface HeroActionProps {
  label?: string
  link?: string
}

interface HeroProps {
  avatar: HeroAvatarProps
  action?: HeroActionProps
  children?: React.ReactNode
  description?: string
  subtitle?: string
  title?: string
}

function Hero ({
  avatar,
  action = {},
  children,
  description,
  subtitle,
  title
}: HeroProps): JSX.Element {
  const DEFAULT_AVATAR_SIZE = 528
  const showCallToAction = Boolean(Object.values(action).length)

  return (
    <div>
      {children ?? null}
      <div className='overflow-hidden my-2.5 rounded-b-[20rem] rounded-t-full'>
        <Image
          alt="Placeholder avatar"
          src="https://i.pravatar.cc/528"
          height={avatar?.height ?? DEFAULT_AVATAR_SIZE}
          width={avatar?.width ?? DEFAULT_AVATAR_SIZE}
        />
      </div>

      <div className='py-2.5'>
        <Heading className='mb-2.5' color='accent' level={5} weight='regular'>{subtitle}</Heading>
        <Heading className='mb-7' color='light' level={1}>{title}</Heading>
        <Body color='neutral' weight='lighter'>{description}</Body>
        {showCallToAction && <a href={action?.link}>{action?.label}</a>}
      </div>
    </div>
  )
}

export default Hero
