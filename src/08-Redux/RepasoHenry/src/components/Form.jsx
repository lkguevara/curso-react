import React from 'react'
import {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {createUser} from '../redux/actions'

const validate = (state, errorsState) => {

  const errors = {...errorsState}
  
    //! name
    if(!state.name) errors.name = 'El nombre es obligatorio'
    else errors.name = '';

    //! username
    if(!state.username) errors.username= 'El username es obligatorio'
    else errors.username= '';

    //! email
    if(!state.email) errors.email= 'El email es obligatorio'
    else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(state.email)) errors.email= 'El email es inválido'
    else errors.email= '';

    //! phone
    if(!state.phone) errors.phone= 'El phone es obligatorio'
    else if(!/^[0-9]{10}$/i.test(state.phone)) errors.phone = 'El phone es inválido'
    else errors.phone= '';

    //! website
    if(!state.website) errors.website= 'El website es obligatorio'
    else if(!/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/i.test(state.website)) errors.website = 'El website es inválido'
    else errors.website= '';

    return errors;
}
  

const Form = () => {
  const dispatch = useDispatch()

  const [form, setForm] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    username: '',
    email: '',
    phone: '',
    website: ''
  });

  const handleInputChange = (e) => {
    const property = e.target.name
    const value = e.target.value

    setForm({
      ...form,
      [property]: value
    })

    // validación del formulario

    setErrors(validate({...form , [property]: value}, errors))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createUser(form))
    alert('Usuario creado')

    setForm({
      name: '',
      username: '',
      email: '',
      phone: '',
      website: ''
    })
    
  }



  return (
    <div>
        <h1>Crear usuario</h1>

        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" name="name" value={form.name} onChange={handleInputChange}/>
                <span style={{color: 'red'}}>{errors.name}</span>
            </div>

            <div>
                <label htmlFor="username">username</label>
                <input type="text" name="username" value={form.username} onChange={handleInputChange}/>
                <span style={{color: 'red'}}>{errors.username}</span>
            </div>

            <div>
                <label htmlFor="email">email</label>
                <input type="text" name="email" value={form.email} onChange={handleInputChange}/>
                <span style={{color: 'red'}}>{errors.email}</span>
            </div>

            <div>
                <label htmlFor="phone">phone</label>
                <input type="text" name="phone" value={form.phone} onChange={handleInputChange}/>
                <span style={{color: 'red'}}>{errors.phone}</span>
            </div>

            <div>
                <label htmlFor="website">website</label>
                <input type="text" name="website" value={form.website} onChange={handleInputChange}/>
                <span style={{color: 'red'}}>{errors.website}</span>
            </div>


            <button type="submit">Crear usuario</button>
        </form>

          
    </div>
  )
}

export default Form