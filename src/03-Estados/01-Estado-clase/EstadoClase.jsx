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
            <div className=" ">
                <h1 className="text-red-500 font-bold text-3xl text-center">Estado de clase</h1>

                <div className='flex justify-center mt-5'>
                    <button className='bg-lime-700 rounded-lg p-2 text-white' type="button" onClick={this.handleClick}>
                        {!this.state.darkMode ? 'Dark Mode' : 'Light Mode'}
                    </button>
                    
                </div>

                <div className='flex justify-center mt-5'>
                    <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={() => this.setState({ count: this.state.count + 1 })}>
                        {this.state.count} likes
                    </button>
                    <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={() => this.setState({ count: this.state.count - 1 })}>
                        {this.disminuir} Dislikes
                    </button>
                    <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={this.reset}> Reset </button>
                </div>
            
            <div className='flex justify-center my-5'>
                <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={() => this.setState({ suma: this.state.suma + 1 })}>
                    sumar
                </button>
                <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={() => this.setState({ suma: this.state.suma - 1 })}>
                    restar
                </button>
                <button className='bg-lime-700 rounded-lg p-2 text-sm mr-5 text-white' onClick={this.resetSuma}> Reset </button>
                <h2> {this.state.suma} </h2>
            </div>
            </div>
        </>
        )
    }
}


