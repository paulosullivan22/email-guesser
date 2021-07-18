import React from 'react'
import { shallow, ShallowWrapper } from 'enzyme'

import Container from './index'

it('renders without error', (): void => {
    // Arrange
    const wrapper: ShallowWrapper = shallow(<Container />)

    // Assert
    expect(wrapper.exists()).toBe(true)
})

it('should not initially render form', (): void => {
    // Arrange
    const wrapper: ShallowWrapper = shallow(<Container />)
    const form: ShallowWrapper = wrapper.find({ "data-test": "form" })

    // Assert
    expect(form).toHaveLength(0)
})

it('renders form when button is clicked', (): void => {
    // Arrange
    const wrapper: ShallowWrapper = shallow(<Container />)
    const startButton: ShallowWrapper = wrapper.find({ "data-test": "start-button" })
    const form: ShallowWrapper = wrapper.find({ "data-test": "form" })

    // Act
    startButton.simulate('click')

    // Assert
    setTimeout(() => {
        expect(form).toHaveLength(1)
    }, 0)
})
