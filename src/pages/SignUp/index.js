import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import SignUp from './Dropdown'

var displayDropdown = (
      <div style={{display: 'flex', justifyContent: 'center'}} >
        <SignUp />
      </div>
      );

ReactDOM.render(displayDropdown, document.getElementById('root'));

registerServiceWorker();


/*import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios"
import {api2} from "../../services/api";


import Logo from "../../assets/images/icon.png";

import { Form, Container } from "./styles";

class SignUp extends Component {
  state = {
    name: "",
    cpf: "",
    email: "",
    telefone: "",
    orgao: "",
    password: "",
    error: ""
  };

  handleSignUp = e => {
    e.preventDefault();
    alert("Eu vou te registrar");
  };

  handleSignUp = async e => {
    e.preventDefault();
    const { name, cpf, email, telefone, orgao, password } = this.state;
    if (!name || !cpf || !email || !telefone || !orgao || !password) {
      this.setState({ error: "Preencha todos os dados para se cadastrar" });
    } else {
      try {
        await axios.post(`${api2}/api/users/create`, { name, cpf, email, telefone, orgao, password });
        console.log(this.state.email)
        this.props.history.push("/");
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao registrar sua conta." });
      }
    }
  };

  render() {
    return (
      <Container>
        <Form onSubmit={this.handleSignUp}>
          <img src={Logo} alt="Airbnb logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Nome de usuário"
            onChange={e => this.setState({ name: e.target.value })}
          />
          <input
            type="number"
            placeholder="Digite o cpf"
            onChange={e => this.setState({ cpf: e.target.value })}
          />
          <input
            type="email"
            placeholder="Endereço de e-mail"
            onChange={e => this.setState({ email: e.target.value })}
          />
          <input
            type="number"
            placeholder="Digite o Telefone"
            onChange={e => this.setState({ telefone: e.target.value })}
          />
          <input
            type="text"
            placeholder="Digite o Orgão"
            onChange={e => this.setState({ orgao: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ password: e.target.value })}
          />
          <button type="submit">Cadastrar</button>
          <hr />
          <Link to="/home">Voltar</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignUp);*/
