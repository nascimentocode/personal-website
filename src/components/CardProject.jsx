import "../index.css"

function CardProject({link, title, data, img, desc}){
    return (
        <div id="card-project">
            <div id="card-header">
                <a href={link} target="_blank">{title}</a>
                <p>{data}</p>
            </div>
            <div id="card-img">
                <img src={img} alt="Tela da aplicação" />
            </div>
            <div id="card-description">
                <p>{desc}.</p>
            </div>
        </div>
    )
}

export default CardProject