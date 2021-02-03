import React, { useState } from 'react'
import Toast from 'react-bootstrap/Toast'
import FormCheck from 'react-bootstrap/FormCheck'

export default function Result ({ onDelete, text, palindrome }) {
  const [show, setShow] = useState(true)
  const onClose = () => {
    setShow(!show)
    setTimeout(onDelete, 500)
  }
  return (
    <Toast onClose={onClose} show={show} className={palindrome && 'bg-success'}>
      <Toast.Header>
        <h3 className='mr-auto'>{text}</h3>
      </Toast.Header>
      <Toast.Body>
        <FormCheck inline>
          <FormCheck.Input disabled defaultChecked={palindrome} />
          <FormCheck.Label>Palindromo</FormCheck.Label>
        </FormCheck>
      </Toast.Body>
    </Toast>
  )
}
