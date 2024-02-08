import "../index.css"

import PGImg from "../assets/projects/screenPasswordGenerator.png"
import SHEImg from "../assets/projects/sistemaHistoricoEscolar.png"

import CardProject from "../components/CardProject"

function Projects() {
    return (
        <section>
            <h2>Projetos</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <CardProject 
                    link="https://github.com/nascimentocode/password-generator" 
                    title="Password Generator"
                    data="JANEIRO, 2024"
                    img={PGImg}
                    desc="Este projeto é um gerador de senhas que permite aos usuários personalizar a criação de senhas de acordo com suas preferências"
                />
                <CardProject 
                    link="https://github.com/nascimentocode/sistema-de-historico-escolar"
                    title="Sistema de Histórico Escolar"
                    data="JANEIRO, 2024"
                    img={SHEImg}
                    desc="Este projeto é o resultado de um trabalho acadêmico. O sistema de histórico escolar permite o cadastro de matérias e notas, além de fornecer funcionalidades de listagem e geração de relatórios"
                />
            </div>
        </section>
    )
}

export default Projects