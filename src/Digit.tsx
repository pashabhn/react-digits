import * as React from 'react'
import * as PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import 'styled-components/macro'
import { theme } from './theme'
import { DigitProps, ThemeProps } from './types'
import { digits } from './constants'
import { Number, VerticalTop, VerticalBottom, HorizontalMiddle, HorizontalTop, HorizontalBottom } from './components'

const TopLeft = styled(VerticalTop)<ThemeProps>`
  opacity: ${(props: ThemeProps) => digits[props.theme.digit][0]};
`
const TopMiddle = styled(HorizontalTop)<ThemeProps>`
  opacity: ${(props: ThemeProps) => digits[props.theme.digit][1]};
`
const TopRight = styled(VerticalTop)<ThemeProps>`
  opacity: ${(props: ThemeProps) => digits[props.theme.digit][2]};
`
const Middle = styled(HorizontalMiddle)<ThemeProps>`
  opacity: ${(props: ThemeProps) => digits[props.theme.digit][3]};
`
const BottomLeft = styled(VerticalBottom)<ThemeProps>`
  opacity: ${(props: ThemeProps) => digits[props.theme.digit][4]};
`
const BottomMiddle = styled(HorizontalBottom)<ThemeProps>`
  opacity: ${(props: ThemeProps) => digits[props.theme.digit][5]};
`
const BottomRight = styled(VerticalBottom)<ThemeProps>`
  opacity: ${(props: ThemeProps) => digits[props.theme.digit][6]};
`

class Digit extends React.Component<DigitProps, {}> {
  static defaultProps = { ...theme }

  // show runtime errors in dev mode
  static propTypes = {
    theme: PropTypes.shape({
      width: PropTypes.number,
      height: PropTypes.number,
      lineColor: PropTypes.string,
      lineWidth: PropTypes.number,
      digit: PropTypes.oneOf(['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']),
    }),
  }

  render() {
    const theme = { ...Digit.defaultProps, ...this.props }
    return (
      <ThemeProvider theme={theme}>
        <Number>
          <TopLeft />
          <TopMiddle />
          <TopRight />
          <Middle />
          <BottomLeft />
          <BottomMiddle />
          <BottomRight />
        </Number>
      </ThemeProvider>
    )
  }
}

// testing
TopLeft.displayName = 'TopLeft'
TopMiddle.displayName = 'TopMiddle'
TopRight.displayName = 'TopRight'
Middle.displayName = 'Middle'
BottomLeft.displayName = 'BottomLeft'
BottomMiddle.displayName = 'BottomMiddle'
BottomRight.displayName = 'BottomRight'

export default Digit
