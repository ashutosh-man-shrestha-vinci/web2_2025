
import { Outlet } from 'react-router-dom'
import { NavBar } from '../NavBar'
import './App.css'
import { Header } from '../Header'
import { Footer } from '../Footer'

function App() {

  return (
     
       <>
       <Header />
       <NavBar /><main>
      <Outlet /> {/* <-- Ici les pages enfants apparaîtront */}
       <Footer />
    </main></>
  )
}

export default App
