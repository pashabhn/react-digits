import { BordersIndex, BordersValue, OrientationsIndex, OrientationsValue, DigitProp } from './types'

export const borders: { readonly [k in BordersIndex]: BordersValue } = {
  TOP: 'top',
  RIGHT: 'right',
  BOTTOM: 'bottom',
  LEFT: 'left',
}

export const orientations: { readonly [k in OrientationsIndex]: OrientationsValue } = {
  VERTICAL: 'vertical',
  HORIZONTAL: 'horizontal',
}

// prettier-ignore
// export const digits: { readonly [k in DigitProp]: number[] } = {
export const digits: { readonly [key: string]: number[] } = {
  zero:  [1, 1, 1, 0, 1, 1, 1],
  one:   [0, 0, 1, 0, 0, 0, 1],
  two:   [0, 1, 1, 1, 1, 1, 0],
  three: [0, 1, 1, 1, 0, 1, 1],
  four:  [1, 0, 1, 1, 0, 0, 1],
  five:  [1, 1, 0, 1, 0, 1, 1],
  six:   [1, 1, 0, 1, 1, 1, 1],
  seven: [0, 1, 1, 0, 0, 0, 1],
  eight: [1, 1, 1, 1, 1, 1, 1],
  nine:  [1, 1, 1, 1, 0, 1, 1],
}
