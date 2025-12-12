
import { useState } from 'react'
import './App.css'
import RandomDog from './components/randomDog.tsx/randomDog'

function App() {
const [refreshKey, setRefreshKey] = useState(0)

  return (
    <>
    <button onClick={() => setRefreshKey(prev => prev + 1)}>Rafraîchir</button>
   <RandomDog key={refreshKey + "-1"} />
<RandomDog key={refreshKey + "-2"} />
<RandomDog key={refreshKey + "-3"} />

    </>
  )
}

export default App
