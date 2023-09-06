import {
  createElement,
  type AnchorHTMLAttributes,
  type ButtonHTMLAttributes
} from 'react'

type ButtonProps = {
  as?: 'a' | 'button'
  variant?: 'accent' | 'dark' | 'light'
} & (
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>
)

function Button ({
  as = 'button',
  variant = 'accent',
  ...props
}: ButtonProps): JSX.Element {
  const ROLES = new Map<string, string>([
    ['a', 'link'],
    ['button', 'button']
  ])
  const role = ROLES.get(as)
  const modifiers = new Map([
    ['accent', 'bg-secondary text-light'],
    ['dark', 'bg-light text-dark'],
    ['light', 'bg-dark text-light']
  ])
  const className = [
    'cursor-pointer',
    'font-bold',
    'font-sans',
    'inline-block',
    'px-12',
    'py-3',
    'relative',
    'rounded-md',
    'text-2sm',
    'uppercase',
    'active:top-px',
    'hover:bottom-px',
    modifiers.get(variant),
    props.className ?? ''
  ].join(' ')

  return createElement(as, { ...props, role, className })
}

export default Button
