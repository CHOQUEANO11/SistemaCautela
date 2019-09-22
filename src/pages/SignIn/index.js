import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import md5 from "md5";
import Logo from "../../assets/images/logoCitel.png";
import { api1 } from "../../services/api";
import axios from 'axios';
import Background from '../../assets/images/fundo.jpg';




import { Form, Container } from "./styles";



class SignIn extends Component {
  state = {
    cpf: "",
    senha: "",
    error: ""
  };

  handleSignIn = async e => {
    e.preventDefault();
    const { cpf, senha } = this.state;
    console.log('senha', senha);
    if (!cpf || !senha) {
      this.setState({ error: "Preencha o cpf e Senha para continuar!" });
    } else {
      try {
        await axios.post(`${api1}api/v1/auth/appidentidade`, {
          cpf: this.state.cpf,
          senha: md5(this.state.senha),
        })
        .then(res => {
          axios.defaults.headers.common['X-Token'] = `${res.data.payload.token}`
          console.log(res.data.payload.token)
          localStorage.setItem('userData', JSON.stringify(res.data))
          localStorage.setItem('token', res.data.payload.token)
          let obj = res.data
          localStorage.setItem('meuId', cpf)
          console.log(obj)
          this.props.history.push("/apresentation");
        })
      }catch (err) {
        this.setState({
          error:
            "Houve um problema com o login, verifique os dados informados"
        });
        console.log(err)
      }
    }
  };

  render() {
    return (
      <Container style={{backgroundImage: `url(${Background})`}}>
        <Form onSubmit={this.handleSignIn}>
          <img src={Logo} alt="Airbnb logo" />
          {this.state.error && <p>{this.state.error}</p>}
          <input
            type="text"
            placeholder="Digite o CPF"
            onChange={e => this.setState({ cpf: e.target.value })}
          />
          <input
            type="password"
            placeholder="Senha"
            onChange={e => this.setState({ senha: e.target.value })}
          />
          <button type="submit">Entrar</button>
          <hr />
        </Form>
      </Container>
    );
  }
}

export default withRouter(SignIn);
