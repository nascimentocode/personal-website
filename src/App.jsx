import { useTranslation } from "react-i18next";
import Navbar from "./components/Navbar"
import Sidebar from "./components/Sidebar"

import { Outlet } from "react-router-dom"
import { useLocation } from 'react-router-dom';

function App() {
  const { t } = useTranslation('sidebar')

  const location = useLocation()

  return (
    <div>
      <Navbar />
      <main>
        {location.pathname === '/sobre' ? <Sidebar to="curriculo" textButton={t('textButtonResume')} /> : <Sidebar to="sobre" textButton={t('textButtonAbout')} />}
        <Outlet />
      </main>
    </div>
  )
}

export default App