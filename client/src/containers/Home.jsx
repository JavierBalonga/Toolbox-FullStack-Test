import React from 'react'
import { useDispatch } from 'react-redux'
import { addResult } from '../store/actionCreators'
import Header from '../components/Header.jsx'

export default function HomeContainer () {
  const dispatch = useDispatch()
  const onSubmit = (text) => dispatch(addResult(text))
  return (
    <div className='bg-secondary' style={{ minHeight: '100vh' }}>
      <Header onSubmit={onSubmit} />
    </div>
  )
}
