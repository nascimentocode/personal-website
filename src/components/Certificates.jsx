import "../index.css"

function Certificates({ title, imageURL, last }) {
    return (
        <li>
            <a href={imageURL} target="_blank" rel="noopener noreferrer">{title}</a> 
            {!last && <p id="certificates-dot">&#8226;</p>}
        </li>
    )
}

export default Certificates