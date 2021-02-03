import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addResult, deleteResult } from '../store/actionCreators'
import Header from '../components/Header.jsx'
import Results from '../components/Results.jsx'

export default function HomeContainer () {
  const dispatch = useDispatch()
  const results = useSelector((state) => state.results)
  const onSubmit = (text) => dispatch(addResult(text))
  const onDelete = (id) => dispatch(deleteResult(id))
  return (
    <div className='bg-secondary' style={{ minHeight: '100vh' }}>
      <Header onSubmit={onSubmit} />
      <Results results={results} onDelete={onDelete} />
    </div>
  )
}
