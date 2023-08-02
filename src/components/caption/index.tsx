import { createElement, type JSX, type ReactNode } from 'react'

interface CaptionProps {
  children: ReactNode
  color?: 'dark' | 'light' | 'neutral'
  variant?: 'small' | 'span'
}

function Caption ({
  color = 'neutral',
  variant = 'small',
  ...props
}: CaptionProps): JSX.Element {
  const modifiers = new Map([
    ['dark', 'text-dark'],
    ['light', 'text-light'],
    ['neutral', 'text-neutral']
  ])
  const className = [
    'font-sans',
    'text-sm',
    modifiers.get(color)
  ].join(' ')
  const role = 'caption'

  return createElement(variant, { ...props, className, role })
}

export default Caption
