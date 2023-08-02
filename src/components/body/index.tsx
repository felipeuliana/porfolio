import type { JSX, ReactNode } from 'react'

interface BodyProps {
  children: ReactNode
  color?: 'dark' | 'light' | 'neutral'
  size?: 'big' | 'normal'
}

function Body ({
  children,
  color = 'dark',
  size = 'normal',
  ...props
}: BodyProps): JSX.Element {
  const modifiers = new Map([
    ['big', 'text-xl'],
    ['normal', 'text-base'],
    ['dark', 'text-dark'],
    ['light', 'text-light'],
    ['neutral', 'text-neutral']
  ])
  const className = [
    'font-sans',
    'mb-8',
    modifiers.get(color),
    modifiers.get(size)
  ].join(' ')

  return (
    <p className={className} role="paragraph" {...props}>{children}</p>
  )
}

export default Body
