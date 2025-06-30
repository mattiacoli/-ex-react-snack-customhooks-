
/*
  Creare un custom hook che sostituisca il cursore del mouse con un componente personalizzato.

  Cosa deve fare?
    Prende in input una stringa o un JSX component (es. un’emoji, un'icona, un'animazione).
    Posiziona il componente al posto del puntatore del mouse.
    Il componente segue i movimenti del mouse.
*/

import { useEffect, useState } from "react"

export default function useCustomPointer(CustomCursor) {
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isVisibile, setIsVisible] = useState(false);

  useEffect(() => {
    document.body.style.cursor = 'none'

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    window.addEventListener('mousemove', handleMouseMove)
    document.addEventListener('mouseleave', handleMouseLeave)

    return () => {
      document.body.style.cursor = 'default'
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [])

  const customPointer = () => {
    if (!isVisibile) return null

    return (
      <div style={{
        position: "fixed",
        top: position.y,
        left: position.x,
        zIndex: 1000,
        pointerEvents: 'none'
      }}>
        {CustomCursor}
      </div>
    )
  }

  return customPointer

}
