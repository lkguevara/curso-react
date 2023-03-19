import { useState, useEffect } from 'react'

//* validaciones 
const validateForm = (form, setError, error) => {
    // validar que el campo email sea un email /texto@texto.com/ y que el campo password tenga al menos 8 caracteres
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        setError({...error, email: ""})
    }
    else {
        setError({...error, email: "El email no es válido"})
    }
    
}

const Formulario = () => {
// * useState
    // se establece un estado en general con el fin de reutilzar código
    const [form, setForm] = useState({
        email: '',
        password: ''
    });

    const [error, setError] = useState({
        email: "",
        password: ""
    });

// *Handles
    // handleFormChange se encarga de actualizar el estado form
    const handleFormChange = (e) => {
        const property = e.target.name // propiedad del objeto que se va a modificar
        const value = e.target.value // valor que se le va a dar a la propiedad

        // actualizar el estado
        setForm({...form, [property]: value});
        validateForm({...form, [property]: value}, setError, error)
    }

    // handleFormSubmit se encarga de resetear el formulario
    const handleFormSubmit = (e) => {
        e.preventDefault() // evita que recargar la página al enviar el formulario. Lo ideal es que se haga en evento submit
        alert(`Formulario enviado con éxito`)
        // resetear el formulario
        setForm({
            email: '',
            password: ''
        })   
    }



  

    return (
        <>
            <h1 className="text-red-500 font-bold text-3xl text-center">Formularios</h1>
            <form className='flex' onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="email">Correo</label>
                    <input 
                        className={`border-2 border-black m-2  ${error.email ? "border-red-500" : "border-green-500"}`} 
                        type="text" // tipo de dato del input
                        name="email" // hace referencia al dato que estoy manejando
                        placeholder="Correo" 
                        value={form.email} // valor de la parte correspondiente del estado general del form
                        onChange={handleFormChange} // A través del onChange dicho estado se podrá modificar
                    />
                    <span className="text-red-500">{error.email ? error.email : ""}</span>
                </div>
                <div>
                    <label htmlFor="password">Contraseña</label>
                    <input 
                        className='border-2 border-black m-2' 
                        type="text" 
                        name="password"
                        placeholder="password" 
                        value={form.password}
                        onChange={handleFormChange}
                    />
                    <span className="text-red-500">{error.password ? error.password : ""}</span>
                </div>
                <button 
                    className='border-solid rounded-md p-1 border-2 border-lime-600'  
                    type="submit"
                >
                    Iniciar sesión
                </button>
            </form>
        
        </>
        
    );
  
};



export default Formulario