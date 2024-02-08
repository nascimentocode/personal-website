import "../index.css"

import PGImg from "../assets/projects/screenPasswordGenerator.png"
import SHEImg from "../assets/projects/sistemaHistoricoEscolar.png"
import SLImg from "../assets/projects/sistemaLinear.png"

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
                    data="FEVEREIRO, 2024"
                    img={SHEImg}
                    desc="Este projeto é o resultado de um trabalho acadêmico. O sistema de histórico escolar permite o cadastro de matérias e notas, além de fornecer funcionalidades de listagem e geração de relatórios"
                />
                <CardProject 
                    link="https://github.com/nascimentocode/trabalho-CN"
                    title="Resolvedor de Sistema Linear"
                    data="FEVEREIRO, 2024"
                    img={SLImg}
                    desc="Este projeto consiste em um resolvedor de sistemas lineares, que recebe uma entrada no formato CSV representando um sistema linear e retorna a solução desse sistema."
                />
            </div>
        </section>
    )
}

export default Projects