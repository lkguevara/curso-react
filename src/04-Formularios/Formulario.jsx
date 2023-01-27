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
        <h1 className="text-red-500 font-bold text-3xl text-center">Formularios</h1>

        <form 
            onSubmit={handleSubmit}> 

            <input className='border-2 border-black m-2'
                type="text" 
                name= 'buscar' 
                autoComplete='off' 
                placeholder='Buscar'
                value={nombre}
                onChange={e => setNombre(e.target.value)} 
            />

            <button className='border-solid rounded-md p-1 border-2 border-lime-600' type="submit">Buscar</button>
            <p>Resultados para: <strong>{nombre}</strong></p>
        </form>

{/* Ejemplo 2 */}
        <form 
            onSubmit={handleSubmit}                                         
        >
            <input className='border-2 border-black m-2'
                type="text" 
                name= 'email' 
                autoComplete='off' 
                placeholder='Email'
                // value={email}
                onchange={(e)=> setEmail(e.target.value)} 
                
            />
            <input className='border-2 border-black m-2'
                type="password" 
                name= 'password' 
                autoComplete='off' 
                placeholder='password'
                // value={password}
                onchange={e => setPassword(e.target.value)} 
            />

            <button className='border-solid rounded-md p-1 border-2 border-lime-600' type="submit">Login</button>
           
        </form>
        <br/>
{/* Ejemplo 3 */}
       
    </>
    
  );
  
};



export default Formulario