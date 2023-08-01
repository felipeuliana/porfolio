import { createElement, type JSX, type ReactNode } from 'react'

export interface HeadingProps {
  children: ReactNode
  color?: 'dark' | 'light' | 'neutral'
  level?: 1 | 2 | 3 | 4 | 5 | 6
}

function Heading ({
  color = 'dark',
  level = 1,
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
    ['dark', 'text-dark'],
    ['light', 'text-light'],
    ['neutral', 'text-neutral']
  ])
  const className = [
    'font-serif',
    'font-bold',
    modifiers.get(color),
    modifiers.get(heading)
  ].join(' ')

  return createElement(heading, { ...props, className })
}

export default Heading
