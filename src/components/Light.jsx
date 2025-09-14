import '../styles/Light.css'

export function Light({ color, index, setActive }) {
  function toggleLight() {
    setActive(prev => prev.map((e, i) => i === index ? !e : false))
  }

  return (
    <div
      className='light'
      style={{ backgroundColor: color }}
      onClick={toggleLight}
    />
  )
}