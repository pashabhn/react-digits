import React from 'react'
import ReactDOM from 'react-dom'
import Digit from './Digit'

it('renders without crashing', () => {
  const div = document.createElement('div')
  ReactDOM.render(<Digit />, div)
  ReactDOM.unmountComponentAtNode(div)
})
