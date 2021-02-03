/* eslint-disable no-undef */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'
import Result from '../components/Result.jsx'

jest.useFakeTimers()

describe('Component: Result', () => {
  let container
  let onDelete
  let props
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    onDelete = jest.fn()
    props = {
      onDelete,
      text: 'tset',
      palindrome: false
    }
  })

  it('should show the text and a checkbox that indicates if it is palindrome', async () => {
    act(() => {
      render(<Result {...props} />, container)
    })
    expect(container.textContent).toMatch(/tset/i)
    const checkbox = container.querySelector('input')
    expect(checkbox.type).toBe('checkbox')
    expect(checkbox.checked).toBe(false)
  })

  it('if the palindrome flag is true the checkbox must be checked', async () => {
    props.text = 'reconocer'
    props.palindrome = true
    act(() => {
      render(<Result {...props} />, container)
    })
    const checkbox = container.querySelector('input')
    expect(checkbox.checked).toBe(true)
  })

  it('when pressing the X should execute onDelete', async () => {
    act(() => {
      render(<Result {...props} />, container)
    })
    const x = container.querySelector('button')
    act(() => Simulate.click(x))
    jest.runAllTimers()
    expect(onDelete).toHaveBeenCalled()
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })
})
