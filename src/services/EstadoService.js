import { axiosConfig } from "../configuration/axiosConfig"

const obtenerEstados = (estado = true) => {
    return axiosConfig.get('estadoEquipos?estado='+estado, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const crearEstado = (data) => {
    return axiosConfig.post('estadoEquipos', data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

const editarEstadoPorID = (estadoId, data) => {
    return axiosConfig.put('estadoEquipos/'+estadoId, data, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const borrarEstadoPorID = (tipoId) => {
    return axiosConfig.delete('estadoEquipos/'+tipoId, {}, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

 const obtenerEstadoPorID = (tipoId) => {
    return axiosConfig.get('estadoEquipos/'+tipoId, {
        headers: {
            'Content-type': 'application/json'
        }
    })
}

export {
    obtenerEstados,
    crearEstado,
    editarEstadoPorID,
    borrarEstadoPorID,
    obtenerEstadoPorID
}