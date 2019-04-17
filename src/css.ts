import { css } from 'styled-components'
import { ThemeProps, OrientationsValue } from './types'
import { borders, orientations } from './constants'

const pseudo = css<ThemeProps>`
  content: '';
  display: block;
  position: absolute;
  height: 0;
  width: 0;
`

const border = (position: string) => css<ThemeProps>`
  background-color: transparent;
  border-top: ${(props: ThemeProps) => props.theme.lineWidth / 2}px solid transparent;
  border-right: ${(props: ThemeProps) => props.theme.lineWidth / 2}px solid transparent;
  border-left: ${(props: ThemeProps) => props.theme.lineWidth / 2}px solid transparent;
  border-bottom: ${(props: ThemeProps) => props.theme.lineWidth / 2}px solid transparent;
  border-${position}: ${(props: ThemeProps) => props.theme.lineWidth / 2}px solid ${(props: ThemeProps) =>
  props.theme.lineColor};
`

const arrowUp = css<ThemeProps>`
  ${pseudo}
  ${border(borders.BOTTOM)}
  left: 0;
  top: ${(props: ThemeProps) => props.theme.lineWidth * -1}px;
`

const arrowDown = css<ThemeProps>`
  ${pseudo}
  ${border(borders.TOP)}
  left: 0;
  bottom: ${(props: ThemeProps) => props.theme.lineWidth * -1}px;
`

const arrowLeft = css<ThemeProps>`
  ${pseudo}
  ${border(borders.RIGHT)}
  top: 0;
  left: ${(props: ThemeProps) => props.theme.lineWidth * -1}px;
`

const arrowRight = css<ThemeProps>`
  ${pseudo}
  ${border(borders.LEFT)}
  top: 0;
  right: ${(props: ThemeProps) => props.theme.lineWidth * -1}px;
`

export const arrows = (orientation: OrientationsValue) => {
  return orientation === orientations.VERTICAL
    ? css<ThemeProps>`
        &::before {
          ${arrowUp}
        }
        &::after {
          ${arrowDown}
        }
      `
    : css<ThemeProps>`
        &::before {
          ${arrowLeft}
        }
        &::after {
          ${arrowRight}
        }
      `
}
