import useSwitch from "./useSwitch"

function App() {
  const [isOn, toogle] = useSwitch()

  return (
    <>
      <h1>Il valore è : {isOn ? "ON" : "OFF"}</h1>
      <button onClick={toogle}>Cambia Stato</button>
    </>
  )
}

export default App
