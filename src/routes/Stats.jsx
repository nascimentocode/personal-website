import { useState, useCallback, useEffect  } from 'react'
import dataPersonal from '../data/stats/personal'
import dataSite from '../data/stats/site'

function Stats(){
    return (
        <section>
            <h2>Status</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <div id="stats">
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
                {/* <div className="stats">
                    <h3>Algumas estatísticas sobre este site</h3>
                    <div id="stats-site-table">
                        <table>
                            <tbody>
                                {dataSite.map((val) => (
                                    <tr>
                                        <td>{val.label}</td>
                                        <td>{val.key}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div> */}
            </div>
        </section>
    )
}

export default Stats