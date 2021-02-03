import React from 'react'
import Header from './components/Header'

export default function App () {
  const onSubmit= (text) => alert(text)
  return <Header onSubmit={onSubmit} />
}
