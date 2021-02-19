import React , { Component } from "react";
import fire from "./config/fire";
import 'bootstrap';

class Login extends Component{
constructor(props)
{
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state={
        email : "",
        password : ""
    }
}
login(e){
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
signup(e){
    e.preventDefault();
    fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
        console.log(u)
    }).catch((err)=>{
        console.log(err);
    })
}
handleChange(e){
    this.setState({
        [e.target.name] : e.target.value
    })
}
render()
{
    return(
        <>
        <div class="container">
            <br/>
            <h1>Iniciar sesión</h1>
            <hr/>
            <form>
                <div class="form-row center">
                    <label for="userName">Email: </label>
                </div>
                <div class="form-row center">
                    <input type="email" name="email" class="form-control" id="email" placeholder="Ingrese su email" onChange={this.handleChange} value={this.state.email} required/>
                </div>
                <br/>
                <div class="form-row center">
                    <label for="password">Contraseña: mín. 6 carácteres.</label>
                </div>
                <div class="form-row center">
                    <input type="password"  onChange={this.handleChange} required name="password" class="form-control" id="password" value={this.state.password} placeholder="Ingrese su contraseña" />
                </div>
                <br/>

     
                <button class="boton" onClick={this.login}>Entrar</button>
                <button class="boton" onClick={this.signup}>Crear cuenta</button>
            </form>

        </div>
        </> 
  
    )
}
}
export default Login;