import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation()

  return (
    <div>
      <Navbar />
      <main>
        {location.pathname === '/sobre' ? <Sidebar to="curriculo" textButton="Saber mais" /> : <Sidebar to="sobre" textButton="Sobre mim" />}
        <Outlet />
      </main>
    </div>
  )
}

export default App