import React from 'react'
import { useState, useEffect } from 'react'

const Formulario = () => {

const [form, setForm] = useState({
    email: '',
    password: ''
})

const [error, setError] = useState({
    email: "",
    password: ""
})

// cada vez que el estado form cambie, se ejecuta la función validateForm
useEffect(() => {
    validateForm()
}, [form]);


const handleFormChange = (e) => {
    // propiedad del objeto que se va a modificar
    const property = e.target.name
    // valor de la propiedad
    const value = e.target.value

    // actualizar el estado
    setForm({
        ...form,
        [property]: value
    })
}

const handleFormSubmit = (e) => {
    e.preventDefault()

    // resetear el formulario
    setForm({
        email: '',
        password: ''
    })

    


    
}

const validateForm = () => {
    // validar que el campo email sea un email /texto@texto.com/
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(form.email)) {
        setError({
            ...error,
            email: ""
        })
    }else{
        setError({
            ...error,
            email: "El email no es válido"
        })
    }
}

  

  return (
    <>
        <h1 className="text-red-500 font-bold text-3xl text-center">Formularios</h1>

        <form 
            className='flex'
            onSubmit={handleFormSubmit}
        >

            <div>
                <label htmlFor="email">Correo</label>
                <input 
                    className={`border-2 border-black m-2  ${error.email ? "border-red-500" : ""}`} 
                    type="text" 
                    name="email" 
                    placeholder="Correo" 
                    value={form.email}
                    onChange={handleFormChange}
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