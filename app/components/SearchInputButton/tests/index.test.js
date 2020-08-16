/**
 *
 * Tests for SearchInputButton
 *
 */

import React from 'react'
import { shallow } from 'enzyme'

import { StyledButton } from '../styles'
import SearchInputButton from '../index'

describe('<SearchInputButton />', () => {
  const props = {
    label: {
      id: 'id',
      defaultMessage: 'defaultMessage',
    },
    onClick: jest.fn(),
    initialValue: '',
  }

  const shallowRender = (localProps = props) => shallow(<SearchInputButton {...localProps} />)

  it('should render the component', () => {
    expect(shallowRender()).toBeTruthy()
  })

  it('should call onClick prop in handleClick', () => {
    const renderedComponent = shallowRender()
    renderedComponent.find(StyledButton).simulate('click')
    expect(props.onClick).toHaveBeenCalled()
  })
})
