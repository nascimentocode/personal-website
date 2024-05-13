import { useTranslation } from "react-i18next"

import PGImg from "../assets/projects/passwordGenerator.png"
import EHSImg from "../assets/projects/sistemaHistoricoEscolar.jpg"
import LSSImg from "../assets/projects/sistemaLinear.png"
import BGImg from "../assets/projects/barcodeGenerator.jpg"
import IASImg from "../assets/projects/IAStocks.png"
import AAImg from "../assets/projects/automationAnalysis.png"
import ABImg from "../assets/projects/automationBudget.png"
import TSImg from "../assets/projects/telemedicine-system.png"

function getProjects() {
    const { t } = useTranslation('projects')

    const data = [
        {
            link: "https://github.com/nascimentocode/telemedicine-system",
            label: t('telemedecineSystemLabel'),
            language: ["python"],
            date: t('telemedecineSystemDate') + ", 2024",
            img: TSImg,
            desc: t('telemedecineSystemDesc')
        },
        {
            link: "https://github.com/nascimentocode/IA-predict-stock-price",
            label: t('IAPredictStockPriceLabel'),
            language: ["python"],
            date: t('IAPredictStockPriceDate') + ", 2024",
            img: IASImg,
            desc:  t('IAPredictStockPriceDesc')
        },
        {
            link: "https://github.com/nascimentocode/investment-analysis-automation",
            label: t('investmentAnalysisAutomationLabel'),
            language: ["python"],
            date: t('investmentAnalysisAutomationDate') + ", 2024",
            img: AAImg,
            desc: t('investmentAnalysisAutomationDesc')
        },
        {
            link: "https://github.com/nascimentocode/budget-issuance-automation",
            label: t('budgetIssuanceAutomationLabel'),
            language: ["python"],
            date: t('budgetIssuanceAutomationDate') + ", 2024",
            img: ABImg,
            desc: t('budgetIssuanceAutomationDesc')
        },
        {
            link: "https://github.com/nascimentocode/NWL-Expert-Python",
            label: t('barcodeGeneratorLabel'),
            language: ["python"],
            date: t('barcodeGeneratorDate') + ", 2024",
            img: BGImg,
            desc: t('barcodeGeneratorDesc')
        },
        {
            link: "https://github.com/nascimentocode/trabalho-CN",
            label: t('linearSystemResolverLabel'),
            language: ["python"],
            date: t('linearSystemResolverDate') + ", 2024",
            img: LSSImg,
            desc: t('linearSystemResolverDesc')
        },
        {
            link: "https://github.com/nascimentocode/sistema-de-historico-escolar",
            label: t('educationalHistorySystemLabel'),
            language: ["java"],
            date: t('educationalHistorySystemDate') + ", 2024",
            img: EHSImg,
            desc: t('educationalHistorySystemDesc')
        },
        {
            link: "https://github.com/nascimentocode/password-generator",
            label: t('passwordGeneratorLabel'),
            language: ["python"],
            date: t('passwordGeneratorDate') + ", 2024",
            img: PGImg,
            desc: t('passwordGeneratorDesc')
        },
    ]

    return data
}

export default getProjects