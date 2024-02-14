import "../index.css"

import PGImg from "../assets/projects/screenPasswordGenerator.png"
import SHEImg from "../assets/projects/sistemaHistoricoEscolar.jpg"
import SLImg from "../assets/projects/sistemaLinear.png"
import BGImg from "../assets/projects/barcodeGenerator.jpg"

import CardProject from "../components/CardProject"

function Projects() {
    return (
        <section>
            <h2>Projetos</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <CardProject 
                    link="https://github.com/nascimentocode/password-generator" 
                    title="Gerador de Senha"
                    data="JANEIRO, 2024"
                    img={PGImg}
                    desc="Este projeto consiste em um gerador de senhas que permite aos usuários personalizar a criação de senhas de acordo com suas preferências"
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
                    desc="Este projeto consiste em um resolvedor de sistemas lineares, que recebe uma entrada no formato CSV representando um sistema linear e retorna a solução desse sistema"
                />
                <CardProject 
                    link="https://github.com/nascimentocode/NWL-Expert-Python"
                    title="Gerador de Código de Barra"
                    data="FEVEREIRO, 2024"
                    img={BGImg}
                    desc="Este projeto consiste em um backend que, mediante uma requisição web, emprega o valor recebido para a geração de um código de barras"
                />
            </div>
        </section>
    )
}

export default Projects