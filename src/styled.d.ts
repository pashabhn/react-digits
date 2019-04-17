import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    width: number
    height: number
    lineColor: string
    lineWidth: number
  }
}
