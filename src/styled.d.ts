import 'styled-components'
import { DigitProp } from './types'

declare module 'styled-components' {
  export interface DefaultTheme {
    width: number
    height: number
    lineColor: string
    lineWidth: number
    digit: DigitProp
  }
}
