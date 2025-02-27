import "../index.css"

import Perfil from "../assets/img/perfil.jpg"

import { MdLocationPin } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { SiCodewars } from "react-icons/si";

import { NavLink } from "react-router-dom"
import { useTranslation } from "react-i18next";

function Sidebar({ to, textButton }) {
    const { t } = useTranslation('sidebar')

    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <aside>
            <div>
                <img src={Perfil} width={200} />
                <h2 id="profile-name">João Vitor Nascimento da Silva</h2>
                <p>{t('area')}</p>
                <p><span><MdLocationPin /></span> Campinas, SP, {t('location')}</p>
            </div>
            <div className="divider-sidebar"></div>
            <div id="about-sidebar">
                <h3>{t('titleAbout')}</h3>
                <p>{t('about')}</p>
                <NavLink to={to} onClick={scrollToTop}>{textButton}</NavLink>
            </div>
            <div className="divider-sidebar"></div>
            <div id="social-links-sidebar">
                <a href="https://github.com/nascimentocode" target="_blanck"><FaGithub /></a>
                <a href="https://www.instagram.com/notnascimento/" target="_blanck"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/joao-vitor-nascimento-da-silva/" target="_blanck"><FaLinkedin /></a>
                <a href="https://www.codewars.com/users/nascimentocode/" target="_blanck"><SiCodewars /></a>
                <a href="mailto:contato.nascimentojv@gmail.com" target="_blanck"><MdOutlineEmail /></a>
            </div>
            <div className="divider-sidebar"></div>
            <div id="entitlement">
                <p>&copy; 2025 Nascimentocode</p>
            </div>
        </aside>
    )
}

export default Sidebar