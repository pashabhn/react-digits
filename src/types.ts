import { DefaultTheme } from 'styled-components'

export interface ThemeProps {
  theme: DefaultTheme
}

type ClassName = 'one' | 'two' | 'three' | 'four' | 'five' | 'six' | 'seven' | 'eight' | 'nine' | 'zero'

export interface DigitProps extends Partial<DefaultTheme> {
  className?: ClassName
}

export type BordersIndex = 'TOP' | 'RIGHT' | 'BOTTOM' | 'LEFT'
export type BordersValue = 'top' | 'right' | 'bottom' | 'left'

export type OrientationsIndex = 'VERTICAL' | 'HORIZONTAL'
export type OrientationsValue = 'vertical' | 'horizontal'
