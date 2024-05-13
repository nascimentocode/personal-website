import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next"

function Age() {
    const [age, setAge] = useState()

    const calculateAge = () => {
        const birthDay =  new Date('2002-01-18T00:00:00')
        setAge(((Date.now() - birthDay) / 31557600000).toFixed(11))
    }
    
    useEffect(() => {
        const timer = setInterval(() => calculateAge(), 25)
        
        return () => {
            clearInterval(timer)
        }
    }, [])

    return <>{age}</>
}

function getStatsPersonal() {
    const { t } = useTranslation('personalStats')

    const data = [
        {
            key: "age",
            label: t('age'),
            value: <Age />
        },
        {
            key: "countries",
            label: t('countriesVisited'),
            value: 0
        },
        {
            key: "location",
            label: t('currentCity'),
            value: "Campinas, SP"
        },
    ]      

    return data
}

export default getStatsPersonal