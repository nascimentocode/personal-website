import { useTranslation } from "react-i18next"

function Home() {
    const { t } = useTranslation('homepage')
    
    return (
        <section>
            <h2>{t('topic')}</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <p>{t('welcome')}</p>
                <p>{t('source')} <a href="https://github.com/nascimentocode/personal-website" target="_blank">{t('linkText')}</a>.</p>
            </div>
        </section>
    )
}

export default Home