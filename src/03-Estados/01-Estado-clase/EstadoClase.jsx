import React, { Component } from 'react'

/* Sintaxis
export default class EstadoClase extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <h1>Estado Clase</h1>
            </div>
        )
    }
}*/


// componente clase
export default class EstadoClase extends Component {
    constructor(props) {
        super(props)

        // estado inicial 
        this.state = {
        darkMode: false,
        count: 0,
        suma: 0
        }
    }


    handleClick = () => {
        this.setState({ darkMode: !this.state.darkMode })
    }
    
    reset = () => {
        this.setState({ count: 0 })
    }
    
    resetSuma = () => {
        this.setState({ suma: 0 })
    }
    
    render() {
        return (
        <>
            <div className="EstadoClase">
                <h1>Estado Clase</h1>
            
                <button type="button" onClick={this.handleClick}>
                    {!this.state.darkMode ? 'Dark Mode' : 'Light Mode'}
                </button>
            </div><br />

            <div>
            
                <button onClick={() => this.setState({ count: this.state.count + 1 })}>
                    {this.state.count} likes
                </button>
                <button onClick={() => this.setState({ count: this.state.count - 1 })}>
                    {this.disminuir} Dislikes
                </button>
                <button onClick={this.reset}> Reset </button>
            </div><br />
            
            <div>
                <button onClick={() => this.setState({ suma: this.state.suma + 1 })}>
                    sumar
                </button>
                <button onClick={() => this.setState({ suma: this.state.suma - 1 })}>
                    restar
                </button>
                <button onClick={this.resetSuma}> Reset </button>
                <h2> {this.state.suma} </h2>
            </div>
        </>
        )
    }
}


