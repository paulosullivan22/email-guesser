import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import Form from './index'

it('renders without error', (): void => {
  // Arrange
  const wrapper: ShallowWrapper = shallow(<Form />)

  // Assert
  expect(wrapper.exists()).toBe(true)
})

it('renders the basic fields', (): void => {
  // Arrange
  const wrapper: ShallowWrapper = shallow(<Form />)
  const nameInput: ShallowWrapper = wrapper.find({ name: 'fullName' })
  const companyInput: ShallowWrapper = wrapper.find({ name: 'company' })
  const submitButton: ShallowWrapper = wrapper.find({ type: 'submit' })

  // Assert
  expect(nameInput).toHaveLength(1)
  expect(companyInput).toHaveLength(1)
  expect(submitButton).toHaveLength(1)
})
