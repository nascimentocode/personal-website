import { useCallback, useEffect, useState } from "react"
import i18n from "../i18n"
import { useTranslation } from "react-i18next"

function LanguageSwitcher() {
    const { t } = useTranslation('languageSwitcher')

    const getInitialLanguage = () => {
        const savedLanguage = localStorage.getItem('language')
        return savedLanguage || i18n.language
    }

    const [languageSelected, setLanguageSelected] = useState(getInitialLanguage)

    useEffect(() => {
        localStorage.setItem('language', languageSelected)
    }, [languageSelected])

    const handleChangeLanguage = useCallback((e) => {
        const language = e.target.value
        setLanguageSelected(language)
        i18n.changeLanguage(language)
    }, [])

    return (
        <select id="dropdown" onChange={handleChangeLanguage} value={languageSelected}>
            <option value="ptBR">{t('portuguese')}</option>
            <option value="en">{t('english')}</option>
        </select>
    )
}

export default LanguageSwitcher