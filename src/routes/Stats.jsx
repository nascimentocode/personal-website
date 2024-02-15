import { useState, useCallback, useEffect  } from 'react'
import dataPersonal from '../data/stats/personal'
import dataSite from '../data/stats/site'

function Stats(){
    const [data, setData] = useState(dataSite)

    const fetchData = useCallback(async () => {
        const res = await fetch('https://api.github.com/repos/nascimentocode/personal-site')
        const resData = await res.json()
        console.log(resData)
    })

    useEffect(() => {
        fetchData();
    }, [fetchData]);

    return (
        <section>
            <h2>Status</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <div>
                    <h3>Algumas estatísticas sobre mim</h3>
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
                <div>
                    <h3>Algumas estatísticas sobre este site</h3>
                    <div id="stats-site-table">
                        <table>
                            <tbody>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats