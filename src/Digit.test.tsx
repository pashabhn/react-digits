import React from 'react'
import ReactDOM from 'react-dom'
import renderer from 'react-test-renderer'
import 'jest-styled-components'
import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Digit from './Digit'
import { digits } from './constants'

configure({ adapter: new Adapter() })

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Digit />, div)
  ReactDOM.unmountComponentAtNode(div)
})

it('matches the snapshot', () => {
  const tree = renderer.create(<Digit />).toJSON()
  expect(tree).toMatchSnapshot()
})

it('renders the default digit', () => {
  const wrapper = mount(<Digit />)
  expect(wrapper.find('TopLeft')).toHaveStyleRule('opacity', '1')
  expect(wrapper.find('TopMiddle')).toHaveStyleRule('opacity', '1')
  expect(wrapper.find('TopRight')).toHaveStyleRule('opacity', '1')
  expect(wrapper.find('Middle')).toHaveStyleRule('opacity', '1')
  expect(wrapper.find('BottomLeft')).toHaveStyleRule('opacity', '1')
  expect(wrapper.find('BottomMiddle')).toHaveStyleRule('opacity', '1')
  expect(wrapper.find('BottomRight')).toHaveStyleRule('opacity', '1')
})

it('renders the digits', () => {
  const wrapper = mount(<Digit />)
  const numbers = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']
  const components = ['TopLeft', 'TopMiddle', 'TopRight', 'Middle', 'BottomLeft', 'BottomMiddle', 'BottomRight']
  numbers.forEach(digit => {
    wrapper.setProps({ digit })
    digits[digit].forEach((opacity: number, i: number) => {
      expect(wrapper.find(components[i])).toHaveStyleRule('opacity', String(opacity))
    })
  })
})

it('accepts props', () => {
  const wrapper = mount(<Digit width={10} height={10} lineColor={'green'} lineWidth={10} />)
  expect(wrapper.childAt(0)).toHaveStyleRule('width', '10px')
  expect(wrapper.find('TopLeft')).toHaveStyleRule('height', '10px')
  expect(wrapper.find('TopLeft')).toHaveStyleRule('background-color', 'green')
  expect(wrapper.find('TopLeft')).toHaveStyleRule('flex', '0 0 10px')
})
