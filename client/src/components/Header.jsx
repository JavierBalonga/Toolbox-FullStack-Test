import React, { useState, useRef } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import Overlay from 'react-bootstrap/Overlay'
import Tooltip from 'react-bootstrap/Tooltip'

export default function Header ({ onSubmit }) {
  const [text, setText] = useState('')
  const [tooltip, setTooltip] = useState('')
  const target = useRef(null)
  const container = useRef(null)
  const onChange = (e) => setText(e.target.value)
  const onClick = () => {
    if (!text) return setTooltip('No Text!')
    onSubmit(text)
    setText('')
    setTooltip('')
  }
  return (
    <Navbar bg='danger'>
      <Container>
        <Col>
          <FormControl
            type='text'
            placeholder='Insert Text'
            value={text}
            onChange={onChange}
          />
        </Col>
        <Col md={2} sm={3} xs={4} ref={container}>
          <Button block onClick={onClick} ref={target}>
            Send
          </Button>
          <Overlay target={target.current} show={!!tooltip} placement='bottom' container={container.current}>
            <Tooltip>{tooltip}</Tooltip>
          </Overlay>
        </Col>
      </Container>
    </Navbar>
  )
}
