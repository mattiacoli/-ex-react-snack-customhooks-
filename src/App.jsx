import useCustomPointer from "./useCustomPointer"
import useDate from "./useDate"
import useKeyPress from "./useKeyPress"
import useSwitch from "./useSwitch"

function App() {
  const [isOn, toogle] = useSwitch()
  const currentDate = useDate()
  const CustomPointer = useCustomPointer("🔥")
  const isPressed = useKeyPress('Enter')

  return (
    <>


      {/* Snack 1 - useSwitch() */}
      <div className="container my-4">
        <label>Snack 1</label>
        <h3>Il valore è : {isOn ? "ON" : "OFF"}</h3>
        <button onClick={toogle} className="p-2">Cambia Stato</button>
      </div>

      {/* Snack 2 - useDate() */}
      <div className="container my-4">
        <label>Snack 2</label>
        <h3>Data e Ora Attuali:</h3>
        <p>{currentDate.toLocaleString()}</p>
      </div>

      {/* Snack 3 - useCustomPointer */}
      <CustomPointer />

      {/* Snack Bonus - useKeyPress() */}
      <div className="container my-4">
        <h3>Tieni premuto "Enter" per testare il custom hook</h3>
        <p>{isPressed ? "Enter premuto! ✅" : "Aspettando input... ⌨️"}</p>
      </div>

    </>
  )
}

export default App
