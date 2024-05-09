import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import enHomepageTranslations from './locales/en/homepage.json'
import ptBRHomepageTranslations from './locales/ptBR/homepage.json'

i18n.use(initReactI18next).init({
    fallbackLng: "ptBR",
    interpolation: {
        escapeValue: false
    },
    resources: {
        en: {
            homepage: enHomepageTranslations,
        },
        ptBR: {
            homepage: ptBRHomepageTranslations,
        },
    }
})

export default i18n