import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import { Outlet } from "react-router-dom"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </div>
  )
}

export default App