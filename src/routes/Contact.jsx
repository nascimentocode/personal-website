import "../index.css"

import { useTranslation } from "react-i18next"

function Contact() {
    const { t } = useTranslation('contact')
    return (
        <section>
            <h2>{t('topic')}</h2>
            <div className="divider-content"></div>
            <form action="https://formspree.io/f/xpzvaerj" method="POST" id="form-contact">
                <input type="text" name="name" placeholder={t('placeholderName')} required />
                <input type="email" name="email" placeholder={t('placeholderEmail')} required />
                <textarea name="message" placeholder={t('placeholderMessage')} required></textarea>
                <button type="submit">{t('button')}</button>
            </form>
        </section>
    )
}

export default Contact