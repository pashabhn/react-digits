import { BordersIndex, BordersValue, OrientationsIndex, OrientationsValue } from './types'

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
