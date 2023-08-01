import type { NextFontWithVariable } from 'next/dist/compiled/@next/font'
import { Fira_Sans, Fira_Mono, Merriweather } from 'next/font/google'

export const sans = Fira_Sans({
  subsets: ['latin'],
  variable: '--font-fira-sans',
  weight: ['200', '400', '600', '800']
})

export const serif = Merriweather({
  subsets: ['latin'],
  variable: '--font-merriweather',
  weight: ['400', '700', '900']
})

export const mono = Fira_Mono({
  subsets: ['latin'],
  variable: '--font-fira-mono',
  weight: ['400', '500', '700']
})

export function getFontsAsVariables (
  fonts: NextFontWithVariable[] = [sans, serif, mono]
): string {
  return fonts.map(({ variable }) => variable).join(' ')
}
