/* eslint-disable no-undef */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'
import Results from '../components/Results.jsx'

jest.useFakeTimers()

describe('Component: Result', () => {
  let container
  let onDelete
  const testResults = [
    { id: 1, text: 'tset', palindrome: false },
    { id: 2, text: 'olleh', palindrome: false },
    { id: 3, text: 'arenera', palindrome: true }
  ]
  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    onDelete = jest.fn()
    act(() => {
      render(<Results results={testResults} onDelete={onDelete} />, container)
    })
  })

  it('should render all the results', async () => {
    expect(container.textContent).toMatch(/tset/i)
    expect(container.textContent).toMatch(/olleh/i)
    expect(container.textContent).toMatch(/arenera/i)
  })

  it('when an X is clicked the onDelete function should be called with the corresponding result id', async () => {
    const [firstX, secondX, thirdX] = container.querySelectorAll('button')
    act(() => Simulate.click(secondX))
    jest.runAllTimers()
    expect(onDelete).toBeCalledWith(2)
    act(() => Simulate.click(firstX))
    jest.runAllTimers()
    expect(onDelete).toBeCalledWith(1)
    act(() => Simulate.click(thirdX))
    jest.runAllTimers()
    expect(onDelete).toBeCalledWith(3)
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })
})
