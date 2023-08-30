import type { JSX, ReactNode } from 'react'

interface BodyProps {
  children: ReactNode
  className?: string
  color?: 'dark' | 'light' | 'neutral'
  size?: 'big' | 'base'
  weight?: 'bold' | 'bolder' | 'lighter' | 'normal'
}

function Body ({
  children,
  className,
  color = 'dark',
  size = 'base',
  weight = 'normal',
  ...props
}: BodyProps): JSX.Element {
  const modifiers = new Map([
    ['base', 'text-base'],
    ['big', 'text-xl'],
    ['bold', 'font-bold'],
    ['bolder', 'font-black'],
    ['lighter', 'font-extralight'],
    ['normal', 'font-normal'],
    ['accent', 'text-primary'],
    ['dark', 'text-dark'],
    ['light', 'text-light'],
    ['neutral', 'text-neutral']
  ])
  const classNames = [
    'font-sans',
    'mb-8',
    modifiers.get(color),
    modifiers.get(size),
    modifiers.get(weight),
    className
  ].join(' ')

  return (
    <p className={classNames} role="paragraph" {...props}>{children}</p>
  )
}

export default Body
