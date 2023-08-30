import { createElement, type JSX, type ReactNode } from 'react'

interface CaptionProps {
  children: ReactNode
  className: string
  color?: 'dark' | 'light' | 'neutral'
  variant?: 'small' | 'span'
  weight?: 'bold' | 'bolder' | 'lighter' | 'normal'
}

function Caption ({
  className,
  color = 'neutral',
  variant = 'small',
  weight = 'normal',
  ...props
}: CaptionProps): JSX.Element {
  const modifiers = new Map([
    ['bold', 'font-bold'],
    ['bolder', 'font-black'],
    ['lighter', 'font-extralight'],
    ['normal', 'font-normal'],
    ['dark', 'text-dark'],
    ['light', 'text-light'],
    ['neutral', 'text-neutral']
  ])
  const classNames = [
    'font-sans',
    'text-sm',
    modifiers.get(color),
    modifiers.get(weight),
    className
  ].join(' ')
  const role = 'caption'

  return createElement(variant, { ...props, className: classNames, role })
}

export default Caption
