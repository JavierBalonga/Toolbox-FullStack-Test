/* eslint-disable no-undef */
import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { act, Simulate } from 'react-dom/test-utils'
import Header from '../components/Header.jsx'

describe('Component: Header', () => {
  let container
  let onSubmit

  beforeEach(() => {
    container = document.createElement('div')
    document.body.appendChild(container)
    onSubmit = jest.fn()
    act(() => {
      render(<Header onSubmit={onSubmit} />, container)
    })
  })

  it('Shuld have an input and a button', async () => {
    const input = container.querySelector('input')
    const button = container.querySelector('button')
    expect(!!input).toBe(true)
    expect(input.placeholder).toBe('Insert Text')
    expect(!!button).toBe(true)
    expect(button.innerHTML).toBe('Send')
  })

  it('When filling the input and pressing the button it shuld submit the text of the input', async () => {
    const input = container.querySelector('input')
    const button = container.querySelector('button')
    act(() => Simulate.change(input, { target: { value: 'test' } }))
    act(() => Simulate.click(button))
    expect(onSubmit).toBeCalledWith('test')
  })

  it('If the button is pressed with the input empty, the submit function must not be called', async () => {
    const button = container.querySelector('button')
    act(() => Simulate.click(button))
    expect(onSubmit).not.toHaveBeenCalled()
    await act(() => Promise.resolve())
  })

  it("If the button is pressed with the input empty, the message 'No text!' must be displayed", async () => {
    const button = container.querySelector('button')
    act(() => Simulate.click(button))
    expect(container.textContent).toMatch(/No text!/i)
    await act(() => Promise.resolve())
  })

  afterEach(() => {
    unmountComponentAtNode(container)
    container.remove()
    container = null
  })
})
