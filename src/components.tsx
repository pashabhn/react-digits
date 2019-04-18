import styled from 'styled-components'
import 'styled-components/macro'
import { ThemeProps } from './types'
import { arrows } from './css'

export const Number = styled.div<ThemeProps>`
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
`

export const Vertical = styled.div<ThemeProps>`
  ${arrows('vertical')}
  position: relative;
  flex: 0 0 ${(props: ThemeProps) => props.theme.lineWidth}px;
  background-color: ${(props: ThemeProps) => props.theme.lineColor};
`

export const VerticalTop = styled(Vertical)<ThemeProps>`
  position: relative;
  margin: 12px 0 2px;
  height: ${(props: ThemeProps) => props.theme.height}px;
  background-color: ${(props: ThemeProps) => props.theme.lineColor};
`

export const VerticalBottom = styled(Vertical)<ThemeProps>`
  height: ${(props: ThemeProps) => props.theme.height}px;
  position: relative;
  margin: 2px 0 12px;
  background-color: ${(props: ThemeProps) => props.theme.lineColor};
`

export const Horizontal = styled.div<ThemeProps>`
  ${arrows('horizontal')}
  position: relative;
  flex: 0 0 ${(props: ThemeProps) => props.theme.lineWidth}px;
  background-color: ${(props: ThemeProps) => props.theme.lineColor};
`

export const HorizontalMiddle = styled(Horizontal)<ThemeProps>`
  border: 0;
  position: relative;
  background-color: ${(props: ThemeProps) => props.theme.lineColor};
  flex: 0 0 calc(100% - ${(props: ThemeProps) => props.theme.lineWidth * 2}px);
  height: ${(props: ThemeProps) => props.theme.lineWidth}px;
  margin: 0 ${(props: ThemeProps) => props.theme.lineWidth}px;
`

export const HorizontalTop = styled(Horizontal)<ThemeProps>`
  border: 0;
  position: relative;
  background-color: ${(props: ThemeProps) => props.theme.lineColor};
  flex: 1 1 calc(100% - ${(props: ThemeProps) => props.theme.lineWidth}px * 4);
  height: ${(props: ThemeProps) => props.theme.lineWidth}px;
  align-self: flex-start;
`

export const HorizontalBottom = styled(HorizontalTop)<ThemeProps>`
  align-self: flex-end;
`
