import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import axios from "axios"
import {api2} from "../../services/api";
import Popup from "reactjs-popup"


import { Form, Container } from "./styles";

class Home extends Component {
  state = {
    descricao: '',
    rp: '',
    setor: '',
    status: 0
  };


  async componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
    const meuId = localStorage.getItem('meuId')
    console.log('IF', meuId === "76140881234")
    if (meuId === "76140881234") {
        await this.setState({
          card: true
        })

        console.log('ta mudando o valor já', this.state.card)
        setTimeout(() => {
          console.log('timeout', this.state.card)
        }, 3000);
    }
  }

  clean() {
    localStorage.clear()
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  handleSignUp = e => {
    e.preventDefault();
    e.target.reset();
    alert("Eu vou te registrar");
  };

  handleSignUp = async e => {
    e.preventDefault();
    e.target.reset()
    const { descricao, rp, setor, status } = this.state;
    if (!descricao || !rp || !setor ) {
      this.setState({ error: "Preencha todos os CAMPOS para prosseguir!!!" });
    } else {
      try {
        await axios.post(`${api2}/api/material/create`, { descricao, rp, setor, status  });
        this.props.history.push("/home");
        console.log(this.state)
      } catch (err) {
        console.log(err);
        this.setState({ error: "Ocorreu um erro ao salvar os dados." });
      }
    }
  };

  render() {
    const { descricao, rp, setor } = this.state;
    const enabled =
          descricao.length > 0 &&
          rp.length > 0 &&
          setor.length > 0;
    return (
      <Container>
        <Form onSubmit={this.handleSignUp.bind(this)}>
          {this.state.error && <p>{this.state.error}</p>}
          <h3>Cadastro de HT'S</h3>
          <input
            type="text"
            placeholder="Modelo"
            onChange={e => this.setState({ descricao: e.target.value })}
          />
          <input
            type="text"
            placeholder="Nº de Série"
            onChange={e => this.setState({ rp: e.target.value })}
          />
          <input
            type="text"
            placeholder="Setor"
            onChange={e => this.setState({ setor: e.target.value })}
          />
          <input
            disabled={true}
            type="number"
            placeholder="ATENÇÃO, confira os dados antes de salvar."
            onChange={e => this.setState({ status: e.target.value })}
          />

          <Popup
          trigger={<button type="submit" disabled={!enabled}>Salvar</button>} position="center center" >
            <div>
              O HT:
              <br />
              Modelo: {this.state.descricao}
              <br />
              Nº de Série: {this.state.rp}
              <br />
              Setor: {this.state.setor}
              <br />
              <div>Foi salvo com sucesso"</div>
            </div>
          </Popup>
          <hr />
          <Link to="/apresentation">Voltar</Link>
        </Form>
      </Container>
    );
  }
}

export default withRouter(Home);
