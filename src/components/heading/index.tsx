import { createElement, type JSX, type ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
  className?: string
  color?: 'accent' | 'dark' | 'light' | 'neutral'
  level?: 1 | 2 | 3 | 4 | 5 | 6
  weight?: 'bold' | 'bolder' | 'lighter' | 'normal'
}

function Heading ({
  className,
  color = 'dark',
  level = 1,
  weight = 'regular',
  ...props
}: HeadingProps): JSX.Element {
  const heading = `h${level}`
  const modifiers = new Map([
    ['h1', 'text-5xl'],
    ['h2', 'text-4xl'],
    ['h3', 'text-3xl'],
    ['h4', 'text-2xl'],
    ['h5', 'text-xl'],
    ['h6', 'text-base'],
    ['bold', 'font-bold'],
    ['bolder', 'font-black'],
    ['regular', 'font-normal'],
    ['accent', 'text-primary'],
    ['dark', 'text-dark'],
    ['light', 'text-light'],
    ['neutral', 'text-neutral']
  ])
  const classNames = [
    'font-bold',
    'font-serif',
    modifiers.get(color),
    modifiers.get(heading),
    modifiers.get(weight),
    className
  ].join(' ')

  return createElement(heading, { ...props, className: classNames })
}

export default Heading
