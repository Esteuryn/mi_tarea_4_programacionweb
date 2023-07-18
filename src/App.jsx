import { useEffect, useState } from 'react'
import Table from './components/Table/table'

function App() {
  const [nombre, setNombre] = useState('')
  
  return (
    <>
    <Table/>
    </>
  )
}

export default App
