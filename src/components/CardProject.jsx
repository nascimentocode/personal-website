import "../index.css"

function CardProject({link, title, data, img, desc}){
    return (
        <div id="card-project">
            <a href={link}>
            
                <div id="card-header">
                    <h2 href={link} target="_blank">{title}</h2>
                    <p>{data}</p>
                </div>
                <div id="card-img">
                    <img src={img} alt="Tela da aplicação" />
                </div>
                <div id="card-description">
                    <p>{desc}.</p>
                </div>
            </a>
        </div>
    )
}

export default CardProject