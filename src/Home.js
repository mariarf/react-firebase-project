import React , { Component, useState } from "react";
import fire from "./config/fire";
import {db} from './config/fire';

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        nombre : "",
        apellido : "",
        edad : "",
        comentario : ""
    }
    
}


submit = (e) => {
    e.preventDefault();
    alert("Formulario enviado");
    db.collection("formulario-comentario")
      .add({
        Nombre: this.state.nombre,
        Apellido: this.state.apellido,
        Edad: this.state.edad,
        Comentario: this.state.comentario
      }).catch((error) => {
        alert(error.message);
      });
    this.setState({
        nombre: '',
        apellido: '',
        edad: '',
        comentario: ''
  
    })
}
logout(){
    fire.auth().signOut();
}
handleNameOnChange(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  handleSOnChange(e) {
    this.setState({
      apellido: e.target.value
    });
  }
  handleEOnChange(e) {
    this.setState({
      edad: e.target.value
    });
  }
  handleCOnChange(e) {
    this.setState({
      comentario: e.target.value
    });
  }
render()
{
    return(
        <div class="container-form">
            <div class="position:relative;">
                <button class="logout" onClick={this.logout}>Logout</button>
            </div>
            <h1>Deja tu comentario</h1>
            <hr/>                 
            <form  accept-charset="UTF-8" role="form" id="formulario" name="formulario">
    
                <div class="form-row">
                    <label for="nombre">Nombre:</label>
                </div>
                <div class="form-row">
                        <input type="text" required name="nombre" class="form-control" id="nombre"  value={this.state.nombre} onChange={ (e) => this.handleNameOnChange(e) } pattern="^(?![\s.]+$)[a-zA-Z\s.]*$"/>
                </div>
                <div class="form-row">
                    <label for="apellido">Apellido:</label>
                </div>
                <div class="form-row">
                    <input type="text" name="apellido" required class="form-control" id="apellido" value={this.state.apellido} onChange={ (e) => this.handleSOnChange(e) } pattern="^(?![\s.]+$)[a-zA-Z\s.]*$"/>
                </div>         
                <div class="form-row">
                    <label for="nombre">Edad:</label>
                </div>
                <div class="form-row">
                    <input type="number" required name="edad" class="form-control" id="edad" value={this.state.edad} onChange={ (e) => this.handleEOnChange(e) }/>
                </div> 
                <div class="form-row">
                    <label for="comentario">Comentario:</label>
                </div>
                <div class="form-row">
                    <textarea id="comentario" name="comentario" rows="5" class="form-control-comentario" value={this.state.comentario} onChange={ (e) => this.handleCOnChange(e) }></textarea>
                </div>

                <button type="submit" onClick={this.submit} class="btn btn-info">Enviar</button>
            </form>
        </div>
    )
}
}
export default Home;