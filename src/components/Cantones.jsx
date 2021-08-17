import { useState, useEffect } from "react";
import axios from "axios"

const Cantones = ({ idProvincia }) => {
    const [cantsSanjose, setCantsSanjose] = useState({})
    const [cantsAlajuela, setCantsAlajuela] = useState({})
    const [cantsCargago, setCantsCartago] = useState({})
    const [cantsHeredia, setCantsHeredia] = useState({})
    const [cantsGuanacaste, setCantsGuanacaste] = useState({})
    const [cantsPuntarenas, setCantsPuntarenas] = useState({})
    const [cantsLimon, setCantsLimon] = useState({})

    useEffect(() => {
        axios.get("https://ubicaciones.paginasweb.cr/provincia/1/cantones.json")
            .then(response => setCantsSanjose(response.data))
        axios.get("https://ubicaciones.paginasweb.cr/provincia/2/cantones.json")
            .then(response => setCantsAlajuela(response.data))
        axios.get("https://ubicaciones.paginasweb.cr/provincia/3/cantones.json")
            .then(response => setCantsCartago(response.data))
        axios.get("https://ubicaciones.paginasweb.cr/provincia/4/cantones.json")
            .then(response => setCantsHeredia(response.data))
        axios.get("https://ubicaciones.paginasweb.cr/provincia/5/cantones.json")
            .then(response => setCantsGuanacaste(response.data))
        axios.get("https://ubicaciones.paginasweb.cr/provincia/6/cantones.json")
            .then(response => setCantsPuntarenas(response.data))
        axios.get("https://ubicaciones.paginasweb.cr/provincia/7/cantones.json")
            .then(response => setCantsLimon(response.data))
    }, [])

    const mostrarCantones = (listaCantones) => {
        return (
            <>
                {
                    Object.values(listaCantones).map((canton, key) => {
                        return (<option key={key + 1}>{canton}</option>)
                    })
                }
            </>
        )
    }

    switch (idProvincia) {
        case 1:
            return mostrarCantones(cantsSanjose)
        case 2:
            return mostrarCantones(cantsAlajuela)
        case 3:
            return mostrarCantones(cantsCargago)
        case 4:
            return mostrarCantones(cantsHeredia)
        case 5:
            return mostrarCantones(cantsGuanacaste)
        case 6:
            return mostrarCantones(cantsPuntarenas)
        case 7:
            return mostrarCantones(cantsLimon)
        default:
            return null
    }
}

export default (Cantones)