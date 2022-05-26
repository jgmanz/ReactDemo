import { Component } from "react";

class AppClass extends Component{
    constructor(props)
    {
        super(props);
        this.state = {
            nombre: "Jose",
            apellido: "Manzanero"
        };
    }

    handleTextChange = (e) =>{ 
        this.setState({ nombre: e.target.value});
    }

    componentDidMount()
    {
        console.log('Componente ha cargado');
        //llamada a API
    }
    componentWillUnmount() 
    {
        console.log('Componen will mount');
    }

    render(){
        console.log('rendering class');
        return (
            <div>
                <h2>Hola {this.state.nombre}</h2>

                <p>
                    escribe tu nombre
                    <input type="text" value={this.state.nombre} onChange={this.handleTextChange}></input>
                </p>
            </div>
        )
    }
    
}

export default AppClass;