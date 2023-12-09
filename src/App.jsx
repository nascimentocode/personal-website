import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import MainContent from "./MainContent"

function App() {
  return (
    <div className="container">
      <Navbar />
      <Sidebar />
      <MainContent />
    </div>
  )
}

export default App