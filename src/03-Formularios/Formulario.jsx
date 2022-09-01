import React from 'react'
import { useState } from 'react'

const Formulario = () => {
// useState
  const [nombre, setNombre] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  

  return (
    <>
        <h1>Formularios</h1>
        <form 
            onSubmit={handleSubmit}>

            <input 
                type="text" 
                name= 'buscar' 
                autoComplete='off' 
                value={nombre}
                onChange={e => setNombre(e.target.value)} // e.target.value es el valor del input
            />

            <button type="submit">Buscar</button>
            <p>Resultados para: <strong>{nombre}</strong></p>
        </form>

        <form 
            onSubmit={handleSubmit}                                         
        >
            <input 
                type="text" 
                name= 'email' 
                autoComplete='off' 
                placeholder='Email'
                // value={email}
                onchange={(e)=> setEmail(e.target.value)} 
                
            />
            <input 
                type="password" 
                name= 'password' 
                autoComplete='off' 
                placeholder='password'
                // value={password}
                onchange={e => setPassword(e.target.value)} 
            />

            <button type="submit">Login</button>
           
        </form>
    </>
    
  );
  
};



export default Formulario