import { useState, useEffect } from "react";
import axios from "axios"

const Cantones = (idProvincia) => {
    const [cantSanjose, setCantSanjose] = useState({})
    useEffect(() => {
        axios.get("https://ubicaciones.paginasweb.cr/provincia/1/cantones.json")
            .then(response => setCantSanjose(response.data))
    }, [])
    console.log(cantSanjose, idProvincia)

    const mostrarCantones = (listaCantones) => {
        return (
            <>
                {
                    listaCantones.map(canton => {
                        return (<option>{canton}</option>)
                    })
                }
            </>
        )
    }

    switch (idProvincia) {
        case 1:
            console.log("Si entro")
            return mostrarCantones(cantSanjose)
        default:
            return <option value="">Vete</option>
    }
}

export default (Cantones)