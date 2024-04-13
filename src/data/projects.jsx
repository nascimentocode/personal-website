import PGImg from "../assets/projects/passwordGenerator.png"
import EHSImg from "../assets/projects/sistemaHistoricoEscolar.jpg"
import LSSImg from "../assets/projects/sistemaLinear.png"
import BGImg from "../assets/projects/barcodeGenerator.jpg"
import IASImg from "../assets/projects/IAStocks.png"
import AAImg from "../assets/projects/automationAnalysis.png"
import ABImg from "../assets/projects/automationBudget.png"

const data = [
    {
        link: "https://github.com/nascimentocode/IA-predict-stock-price",
        label: "IA de Previsão do Preço de Ações",
        language: ["python"],
        date: "MARÇO, 2024",
        img: IASImg,
        desc: "Este projeto consiste em uma IA de previsão de comportamento e preço de ações"
    },
    {
        link: "https://github.com/nascimentocode/investment-analysis-automation",
        label: "Automatização de Análise de Investimento",
        language: ["python"],
        date: "MARÇO, 2024",
        img: AAImg,
        desc: "Este projeto consiste em automatizar o envio por email de análises das cotações de ações"
    },
    {
        link: "https://github.com/nascimentocode/budget-issuance-automation",
        label: "Automatização de Geração de Orçamentos em PDF",
        language: ["python"],
        date: "MARÇO, 2024",
        img: ABImg,
        desc: "Este projeto consiste em automatizar a geração de orçamentos em PDF"
    },
    {
        link: "https://github.com/nascimentocode/NWL-Expert-Python",
        label: "Gerador de Código de Barra",
        language: ["python"],
        date: "FEVEREIRO, 2024",
        img: BGImg,
        desc: "Este projeto consiste em um backend que, mediante uma requisição web, emprega o valor recebido para a geração de um código de barras"
    },
    {
        link: "https://github.com/nascimentocode/trabalho-CN",
        label: "Resolvedor de Sistema Linear",
        language: ["python"],
        date: "FEVEREIRO, 2024",
        img: LSSImg,
        desc: "Este projeto consiste em um resolvedor de sistemas lineares, que recebe uma entrada no formato CSV representando um sistema linear e retorna a solução desse sistema"
    },
    {
        link: "https://github.com/nascimentocode/sistema-de-historico-escolar",
        label: "Sistema de Histórico Escolar",
        language: ["java"],
        date: "FEVEREIRO, 2024",
        img: EHSImg,
        desc: "Este projeto é o resultado de um trabalho acadêmico. O sistema de histórico escolar permite o cadastro de matérias e notas, além de fornecer funcionalidades de listagem e geração de relatórios"
    },
    {
        link: "https://github.com/nascimentocode/password-generator",
        label: "Gerador de Senha",
        language: ["python"],
        date: "JANEIRO, 2024",
        img: PGImg,
        desc: "Este projeto consiste em um gerador de senhas que permite aos usuários personalizar a criação de senhas de acordo com suas preferências"
    },
]

export default data