import React from 'react'
import Card from './Card'
// conectando react - redux
import { connect } from 'react-redux';
// despachar la action
import {getPersonaje} from '../redux/actions.js'
  


class CardsClass extends React.Component {
    constructor(props) {
        super(props);
    }

    // cuando el componente se monta, se ejecuta 
    componentDidMount() {
        this.props.despacharPersonaje()
    }

    render() {
        return (
        <div>
            <h1>Card Class</h1>
            <div>
                {
                    this.props.personaje.map((item) => {
                        return (
                            <Card 
                                key={item.id} 
                                id={item.id}
                                name={item.name} 
                                status={item.status}
                             />
                        )
                    })
                }
            </div>
            
        </div>
        )
    }
}

// Esta función va a recibir el estado global y retornar un objeto con las propiedades que se le van a pasar al componente
const mapStateToProps = (state) => {
    return {
        personaje: state.personaje, // personaje es el nombre de la propiedad que se le va a pasar al componente
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        despacharPersonaje: () =>{
            dispatch(getPersonaje())
        }
    }
}


export default connect(mapStateToProps, mapDispatchToProps) (CardsClass) // se exporta el componente conectado a redux (connect) y se le pasa el componente a conectar (CardsClass) 

// mapStateToProps es una funcion que recibe el estado de redux y retorna un objeto con las propiedades que se le van a pasar al componente