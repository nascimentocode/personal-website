import PGImg from "../assets/projects/passwordGenerator.png"
import EHSImg from "../assets/projects/sistemaHistoricoEscolar.jpg"
import LSSImg from "../assets/projects/sistemaLinear.png"
import BGImg from "../assets/projects/barcodeGenerator.jpg"

const data = [
    {
        link: "https://github.com/nascimentocode/NWL-Expert-Python",
        label: "Gerador de Código de Barra",
        date: "FEVEREIRO, 2024",
        img: BGImg,
        desc: "Este projeto consiste em um backend que, mediante uma requisição web, emprega o valor recebido para a geração de um código de barras"
    },
    {
        link: "https://github.com/nascimentocode/trabalho-CN",
        label: "Resolvedor de Sistema Linear",
        date: "FEVEREIRO, 2024",
        img: LSSImg,
        desc: "Este projeto consiste em um resolvedor de sistemas lineares, que recebe uma entrada no formato CSV representando um sistema linear e retorna a solução desse sistema"
    },
    {
        link: "https://github.com/nascimentocode/sistema-de-historico-escolar",
        label: "Sistema de Histórico Escolar",
        date: "FEVEREIRO, 2024",
        img: EHSImg,
        desc: "Este projeto é o resultado de um trabalho acadêmico. O sistema de histórico escolar permite o cadastro de matérias e notas, além de fornecer funcionalidades de listagem e geração de relatórios"
    },
    {
        link: "https://github.com/nascimentocode/password-generator",
        label: "Gerador de Senha",
        date: "JANEIRO, 2024",
        img: PGImg,
        desc: "Este projeto consiste em um gerador de senhas que permite aos usuários personalizar a criação de senhas de acordo com suas preferências"
    },
]

export default data