import { useCallback, useEffect, useState } from 'react'
import './App.css'

function App() {
  const [second, setSecond] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {
    if (!isRunning) return

    const interval = setInterval(() => {
      setSecond((prevSecond) => prevSecond + 0.1)
    }, 100)

    return () => {
      clearInterval(interval)
    }
  }, [isRunning])

  const onReset = useCallback(() => {
    setSecond(0)
  }, [])

  const onToggle = useCallback(() => {
    setIsRunning((prevIsRunning) => !prevIsRunning)
  }, [])

  return (
    <>
      <h1>{Number(second.toPrecision(5))}</h1>
      <div>
        Stopwatch
      </div>
      <div className="card">
        <button onClick={
          onToggle
        }>
          {isRunning ? 'Stop' : 'Start'}
        </button>
        <button onClick={onReset}>
          Reset
        </button>
      </div>
    </>
  )
}

export default App
