import React from 'react'
import styled from 'styled-components'
import 'styled-components/macro'
import PropTypes from 'prop-types'
import { theme } from './theme'
import { DigitProps, ThemeProps } from './types'
import { arrows } from './css'

const Number = styled.div<ThemeProps>`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  width: ${(props: ThemeProps) => props.theme.width}px;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    position: relative;
    background-color: ${(props: ThemeProps) => props.theme.lineColor};
  }

  &.zero {
    div:nth-of-type(4) {
      opacity: 0;
    }
  }
  &.one {
    div:nth-of-type(1),
    div:nth-of-type(2),
    div:nth-of-type(4),
    div:nth-of-type(5),
    div:nth-of-type(6) {
      opacity: 0;
    }
  }
  &.two {
    div:nth-of-type(1),
    div:nth-of-type(7) {
      opacity: 0;
    }
  }
  &.three {
    div:nth-of-type(1),
    div:nth-of-type(5) {
      opacity: 0;
    }
  }
  &.four {
    div:nth-of-type(2),
    div:nth-of-type(5),
    div:nth-of-type(6) {
      opacity: 0;
    }
  }
  &.five {
    div:nth-of-type(3),
    div:nth-of-type(5) {
      opacity: 0;
    }
  }
  &.six {
    div:nth-of-type(3) {
      opacity: 0;
    }
  }
  &.seven {
    div:nth-of-type(1),
    div:nth-of-type(4),
    div:nth-of-type(5),
    div:nth-of-type(6) {
      opacity: 0;
    }
  }
  &.eight {
  }
  &.nine {
    div:nth-of-type(5) {
      opacity: 0;
    }
  }
`

const Vertical = styled.div<ThemeProps>`
  ${arrows('vertical')}
  flex: 0 0 ${(props: ThemeProps) => props.theme.lineWidth}px;
`

const VerticalTop = styled(Vertical)<ThemeProps>`
  height: ${(props: ThemeProps) => props.theme.height}px;
  margin: 12px 0 2px;
`

const VerticalBottom = styled(Vertical)<ThemeProps>`
  height: ${(props: ThemeProps) => props.theme.height}px;
  margin: 2px 0 12px;
`

const Horizontal = styled.div<ThemeProps>`
  ${arrows('horizontal')}
  flex: 0 0 ${(props: ThemeProps) => props.theme.lineWidth}px;
`

const HorizontalMiddle = styled(Horizontal)<ThemeProps>`
  border: 0;
  background-color: ${(props: ThemeProps) => props.theme.lineColor};
  flex: 0 0 calc(100% - ${(props: ThemeProps) => props.theme.lineWidth * 2}px);
  height: ${(props: ThemeProps) => props.theme.lineWidth}px;
  margin: 0 ${(props: ThemeProps) => props.theme.lineWidth}px;
`

const HorizontalTop = styled(Horizontal)<ThemeProps>`
  border: 0;
  background-color: ${(props: ThemeProps) => props.theme.lineColor};
  flex: 1 1 calc(100% - ${(props: ThemeProps) => props.theme.lineWidth}px * 4);
  height: ${(props: ThemeProps) => props.theme.lineWidth}px;
  align-self: flex-start;
`

const HorizontalBottom = styled(HorizontalTop)<ThemeProps>`
  align-self: flex-end;
`

class Digit extends React.Component<DigitProps, {}> {
  static defaultProps = { className: 'eight', ...theme }

  // show runtime errors in dev mode
  static propTypes = {
    className: PropTypes.oneOf(['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'zero']),
  }

  render() {
    return (
      <Number className={this.props.className}>
        <VerticalTop />
        <HorizontalTop />
        <VerticalTop />
        <HorizontalMiddle />
        <VerticalBottom />
        <HorizontalBottom />
        <VerticalBottom />
      </Number>
    )
  }
}

export default Digit
