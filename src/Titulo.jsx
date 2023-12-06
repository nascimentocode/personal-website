import { useState } from "react"

function Titulo({nome}) {
    const [texto, setTexto] = useState("Titulo inicial")
    const [inputText, setInputText] = useState("")



    return (
        <div>
            <h1>{texto}</h1>
            <input type="text" value={inputText} onChange={(e) => {
                setInputText(e.target.value)
            }}/>
            <button onClick={() => {
                setTexto(inputText)
            }}>Mudar</button>
        </div>
    )
}

export default Titulo