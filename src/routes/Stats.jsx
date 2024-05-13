import { useState, useCallback, useEffect  } from 'react'
import { useTranslation } from 'react-i18next'

import getStatsPersonal from '../data/stats/personal'
import getStatsSite from '../data/stats/site'

function Stats(){
    const { t } = useTranslation('stats')

    const dataPersonal = getStatsPersonal()
    const dataSite = getStatsSite()

    const [data, setData] = useState(dataSite)

    const fetchData = useCallback(async () => {
        const res = await fetch(
            'https://api.github.com/repos/nascimentocode/personal-website',
        );
        const resData = await res.json();
        setData(
            dataSite.map((field) => ({
                ...field, 
                value: Object.keys(resData).includes(field.key)
                ? resData[field.key]
                : field.value,
            }))
        )
    }, [dataSite])

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <section>
            <h2>{t('topic')}</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <div className="stats">
                    <h3>{t('titleStatsMe')}</h3>
                    <div id="stats-personal-table">
                        <table>
                            <tbody>
                                {dataPersonal.map((val) => (
                                    <tr>
                                        <td width="70%">{val.label}</td>
                                        <td>{val.value}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="stats">
                    <h3>{t('titleStatsSite')}</h3>
                    <div id="stats-site-table">
                        <table>
                            <tbody>
                                {data.map((val) => {
                                    if (val.hasOwnProperty('format')) {
                                        return (
                                            <tr>
                                                <td>{val.label}</td>
                                                <td>{val.format(val.value)}</td>
                                            </tr>
                                        )
                                    } else {
                                        return (
                                            <tr>
                                                <td>{val.label}</td>
                                                <td>{val.value}</td>
                                            </tr>
                                        )
                                    }
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats