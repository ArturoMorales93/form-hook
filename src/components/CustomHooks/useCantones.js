import { useState, useEffect } from "react";
import axios from "axios"

const useCantones = (idProvincia) => {
    const [cantsSanjose, setCantsSanjose] = useState({})
    const [cantsAlajuela, setCantsAlajuela] = useState({})
    const [cantsCargago, setCantsCartago] = useState({})
    const [cantsHeredia, setCantsHeredia] = useState({})
    const [cantsGuanacaste, setCantsGuanacaste] = useState({})
    const [cantsPuntarenas, setCantsPuntarenas] = useState({})
    const [cantsLimon, setCantsLimon] = useState({})

    const getData = (url, cantsSetter) => {
        axios.get(url)
            .then(response => cantsSetter(response.data))
            .catch(() => cantsSetter(["Error con API de cantones"]))
    }

    useEffect(() => {
        getData("https://ubicaciones.paginasweb.cr/provincia/1/cantones.json", setCantsSanjose)
        getData("https://ubicaciones.paginasweb.cr/provincia/2/cantones.json", setCantsAlajuela)
        getData("https://ubicaciones.paginasweb.cr/provincia/3/cantones.json", setCantsCartago)
        getData("https://ubicaciones.paginasweb.cr/provincia/4/cantones.json", setCantsHeredia)
        getData("https://ubicaciones.paginasweb.cr/provincia/5/cantones.json", setCantsGuanacaste)
        getData("https://ubicaciones.paginasweb.cr/provincia/6/cantones.json", setCantsPuntarenas)
        getData("https://ubicaciones.paginasweb.cr/provincia/7/cantones.json", setCantsLimon)
    }, [])

    switch (idProvincia) {
        case 1:
            return Object.values(cantsSanjose)
        case 2:
            return Object.values(cantsAlajuela)
        case 3:
            return Object.values(cantsCargago)
        case 4:
            return Object.values(cantsHeredia)
        case 5:
            return Object.values(cantsGuanacaste)
        case 6:
            return Object.values(cantsPuntarenas)
        case 7:
            return Object.values(cantsLimon)
        default:
            return []
    }
}

export default useCantones
