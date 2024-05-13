import { NavLink } from "react-router-dom"
import { useEffect, useState } from "react"
import { FiAlignRight, FiX } from "react-icons/fi";

import LanguageSwitcher from "./LanguageSwitcher";

import "../index.css"
import { useTranslation } from "react-i18next";

function Navbar() {
    const { t } = useTranslation('navbar')

    const [hamburguerOpen, setHamburguerOpen] = useState(false)

    const toggleHamburguer = () => {
        setHamburguerOpen(!hamburguerOpen)
    }

    const handleResize = () => {
        if (window.innerWidth > 768 && !hamburguerOpen) {
            setHamburguerOpen(true)
        }
        
        if (window.innerWidth <= 768 && hamburguerOpen) {
            setHamburguerOpen(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }   

    useEffect(() => {
        window.addEventListener("resize", handleResize)

        return () => {
            window.removeEventListener("resize", handleResize)
        }
    }, [hamburguerOpen])

    return (
        <header>
            <nav>
                <div id="brand">
                    <NavLink to="/" onClick={scrollToTop}>Nascimento<span>code</span></NavLink>
                </div>
                <div id="icon" onClick={toggleHamburguer}>
                    {hamburguerOpen ? <FiX /> : <FiAlignRight />}
                </div>
                <div id="nav-link" style={{display: hamburguerOpen || window.innerWidth > 768 ? "flex" : "none"}} onClick={scrollToTop}>
                    <NavLink to="sobre" onClick={toggleHamburguer}>{t('about')}</NavLink>
                    <NavLink to="curriculo" onClick={toggleHamburguer}>{t('resume')}</NavLink>
                    <NavLink to="projetos" onClick={toggleHamburguer}>{t('projects')}</NavLink>
                    <NavLink to="status" onClick={toggleHamburguer}>{t('stats')}</NavLink>
                    <NavLink to="contato" onClick={toggleHamburguer}>{t('contact')}</NavLink>
                    <LanguageSwitcher />
                </div>
            </nav>
        </header>
    )
}

export default Navbar