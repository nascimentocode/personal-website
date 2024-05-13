import "../index.css"

import { useTranslation } from "react-i18next"
import React,  { useEffect, useState } from "react"

function About() {
    const { t } = useTranslation('about')

    const [age, setAge] = useState()

    const calculateAge = () => {
        const birthDay =  new Date('2002-01-18T00:00:00')

        setAge(Math.floor((Date.now() - birthDay) / 31557600000))
    }

    useEffect(() => {
        calculateAge()
    }, [age])

    return (
        <section>
            <h2>{t('topic')}</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <p>{t('aboutMe1', { age: age })}</p>
                <p>{t('aboutMe2')}</p>
                <p>{t('aboutMe3')}</p>
                <p>{t('aboutMe4')}</p>
                <p>{t('aboutMe5')}</p>
                <p>{t('aboutMe6')}</p>
                <p>{t('aboutMe7')}</p>
            </div>
        </section>
    )
}

export default About