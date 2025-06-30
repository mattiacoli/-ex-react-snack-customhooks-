/*
  Creare un custom hook che rilevi se un tasto specifico della tastiera è premuto.

  Cosa deve fare?
    Prende in input il nome di un tasto ("Enter", "Escape", ecc.).
    Ritorna true quando il tasto è premuto e false quando viene rilasciato.
    Usa event listener su keydown e keyup.
*/

import { useEffect, useState } from "react"

export default function useKeyPress(kname) {

  const [isPressed, setIsPressed] = useState(false)

  useEffect((e) => {
    document.addEventListener('keydown', (e) => {
      if (kname === e.key) {
        setIsPressed(true)
      }

    })

    document.addEventListener('keyup', () => setIsPressed(false))

    return () => {
      document.removeEventListener('keydown', () => setIsPressed(false))
      document.removeEventListener('keyup', () => setIsPressed(false))
    }


  }, [])

  return isPressed

}