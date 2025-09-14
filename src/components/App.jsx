import { useState } from 'react'
import { Light } from './Light'

function App() {
  const colors = ['red', 'orange', 'green']
  const [active, setActive] = useState(colors.map(e => false))

  return (
    <>
      {colors.map((e, i) => (
        <Light color={active[i] ? e : '#242424'} index={i} setActive={setActive} key={i} />
      ))}
    </>
  )
}

export default App
