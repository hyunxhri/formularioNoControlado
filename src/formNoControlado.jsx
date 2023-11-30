import { useState } from "react";
import { useRef } from "react";

const FormNoControlado = () => {
    const formulario = useRef(null)
    const [mensaje, setMensaje] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        const data = new FormData(formulario.current)
        console.log(...data.entries())
        const objetoDatos = Object.fromEntries([...data.entries()])
        console.log(objetoDatos)
        const { Nombre, Descripcion, Estado } = objetoDatos
        const isEmpty = !Nombre.trim() || !Descripcion.trim() || !Estado.trim()
        isEmpty ? setMensaje("Error.") : setMensaje("Guardado correctamente.")

    }

    return (
        <>
            <form onSubmit={handleSubmit} ref={formulario}>
                <input name="Nombre" placeholder="Nombre de la tarea" type="text" className="form-control mb-2" />
                <textarea name="Descripcion" placeholder="Introduce la descripción de la tarea" className="form-control mb-2" />
                <select name="Estado" className="form-control mb-2" defaultValue="Pendiente">
                    <option value="pendiente">Pendiente</option>
                    <option value="completada">Completada</option>
                </select>
                <button type="submit" className="btn btn-primary">Añadir</button>
            </form >
            {mensaje}
        </>
    );
}

export default FormNoControlado;