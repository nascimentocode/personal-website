import "../index.css"

function CardProject({ data }){
    return (
        <div id="card-project">
            <a href={data.link} target="_blank">
                <div id="card-header">
                    <h2>{data.label}</h2>
                    <p>{data.date}</p>
                </div>
                <div id="card-img">
                    <img src={data.img} alt="Tela da aplicação" />
                </div>
                <div id="card-description">
                    <p>{data.desc}.</p>
                </div>
            </a>
        </div>
    )
}

export default CardProject