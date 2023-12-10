import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import MainContent from "./MainContent"

function App() {
  return (
    <div>
      <Navbar />
      <main>
        <Sidebar />
        <MainContent />
      </main>
    </div>
  )
}

export default App