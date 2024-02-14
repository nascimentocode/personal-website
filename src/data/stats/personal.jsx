import React, { useState, useEffect } from "react";

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

const data = [
    {
        key: "age",
        label: "Idade atual",
        value: <Age />
    },
    {
        key: "countries",
        label: "Países visitados",
        value: 0
    },
    {
        key: "location",
        label: "Atual Cidade",
        value: "Campinas, SP"
    },
]

export default data