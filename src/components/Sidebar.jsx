import "../index.css"

import Perfil from "../assets/img/perfil.jpg"

import { MdLocationPin } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";

import { NavLink } from "react-router-dom"

function Sidebar({to, textButton}) {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    }

    return (
        <aside>
            <div>
                <img src={Perfil} width={200}/>
                <h2 id="profile-name">João Vitor Nascimento da Silva</h2>
                <p>Back-End Developer</p>
                <p><span><MdLocationPin /></span> Campinas, SP, Brasil</p>
            </div>
            <div className="divider-sidebar"></div>
            <div id="about-sidebar">
                <h3>Sobre</h3>
                <p>Olá, sou João Vitor. Atualmente estou cursando Ciência da Computação.</p>
                <NavLink to={to} onClick={scrollToTop}>{textButton}</NavLink>
            </div>
            <div className="divider-sidebar"></div>
            <div id="social-links-sidebar">
                <a href="https://github.com/nascimentocode" target="_blanck"><FaGithub /></a>
                <a href="https://www.instagram.com/notnascimento/" target="_blanck"><FaInstagram /></a>
                <a href="https://www.linkedin.com/in/joao-vitor-nascimento-da-silva/" target="_blanck"><FaLinkedin /></a>
                <a href="mailto:contato.nascimentojv@gmail.com" target="_blanck"><MdOutlineEmail /></a>
            </div>
            <div className="divider-sidebar"></div>
            <div id="entitlement">
                <p>&copy; 2023 Nascimentocode</p>
            </div>
        </aside>
    )
}

export default Sidebar