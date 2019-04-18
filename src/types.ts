import { DefaultTheme } from 'styled-components'

export interface ThemeProps {
  theme: DefaultTheme
}

export interface DigitProps extends Partial<ThemeProps> {
  className?: string
}

export type DigitProp = 'zero' | 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine'

export type BordersIndex = 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT'
export type BordersValue = 'top' | 'right' | 'bottom' | 'left'

export type OrientationsIndex = 'VERTICAL' | 'HORIZONTAL'
export type OrientationsValue = 'vertical' | 'horizontal'
