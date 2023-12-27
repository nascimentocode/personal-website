import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom';

function changeSidebar() {
  const location = useLocation();
  console.log(location)
  
  if (location.pathname === '/sobre') {
    return <Sidebar to="curriculo" textButton="Saber mais" />
  }
  return <Sidebar to="sobre" textButton="Sobre mim" />
}

function App() {
  return (
    <div>
      <Navbar />
      <main>
        {changeSidebar()}
        <Outlet />
      </main>
    </div>
  )
}

export default App