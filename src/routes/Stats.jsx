import data from '../data/stats'

function Status(){
    return (
        <section>
            <h2>Status</h2>
            <div className="divider-content"></div>
            <div className="section-content">
                <h3>Algumas estatísticas sobre mim</h3>
                <div id="stats-table">
                    <table>
                        <tbody>
                            {data.map((val) => (
                                <tr>
                                    <td width="70%">{val.label}</td>
                                    <td>{val.value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Status