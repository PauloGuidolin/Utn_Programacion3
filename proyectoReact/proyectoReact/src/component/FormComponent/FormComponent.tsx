import { useForm } from "../../hooks/useForm"

export const FormComponent = () => {
    const { values, handleChange, resetForm } = useForm({
        email: '',
        nombre: '',
        edad: 0
    })
    const { email, nombre, edad } = values

    const handleSubmitForm=()=>{
        console.log(values)
    }
    const handleResetForm=()=>{
        resetForm()
    }

    return (
        <div>
            <div style={{ textAlign: 'center' }}>
                <h2>Formulario</h2>
            </div>
            <div style={{
                display: 'flex', flexDirection: 'column', justifyContent: 'center',
                alignItems: 'center',
                gap: '15px'

            }}>
                <input
                    value={email}
                    name="email"
                    onChange={handleChange}
                    type="email"
                    placeholder="example@example.com" />

                <input
                    value={nombre}
                    name="nombre"
                    onChange={handleChange}
                    type="text"
                    placeholder="Nombre" />

                <input
                    value={edad}
                    name="edad"
                    onChange={handleChange}
                    type="number"
                    placeholder="Edad" />

            </div>
            <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <button type="button" onClick={handleSubmitForm}>Enviar</button>
                <button type="button" onClick={handleResetForm}>Resetear</button>
            </div>
        </div>

    )
}
