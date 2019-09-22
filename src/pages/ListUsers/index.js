import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from '../../components/Header';
import axios from "axios";
import {api2} from "../../services/api";
import { Form, Container } from "./styles";
import QrCode from 'qrcode.react'


class ListUsers extends Component {
  state = {
    produto: [],
    card: false,
    eventos: [],
    cautelaAb: [],
    cautelaClos: []
  };

  async componentDidMount() {
    const mytoken = localStorage.getItem('token')
    const meuId = localStorage.getItem('meuId')
    console.log('IF', meuId === "76140881234")
    console.log(mytoken)
    this.loadUsers();
  }

  loadUsers = async () => {
    const token = localStorage.getItem('token');

    const header = {
      "Authorization" : `Bearer ${token}`
    }
    // axios.defaults.headers.common = {'Authorization': `Bearer ${token}`}
    const res = await axios.get(`${api2}/api/material/all`, {headers: header})
    const data = res.data.payload
    console.log(data)

    this.setState({
      produto: data
    });

    const event = await axios.get(`${api2}/api/evento/all`);
    const even = event.data.payload
    console.log(even)

    this.setState({
      eventos: even
    })
    console.log(even);

    const cauth = await axios.get(`${api2}/api/cautela/1`);
    const caut = cauth.data.payload
    console.log(caut)

    this.setState({
      cautelaAb: caut
    })
    console.log(caut);

    const cauthOpen = await axios.get(`${api2}/api/cautela/0`);
    const cautOpen = cauthOpen.data.payload
    console.log(cautOpen)

    this.setState({
      cautelaClos: cautOpen
    })
    console.log(cautOpen)
  }

  render() {
    const { produto } = this.state;
    const { eventos } = this.state;
    const { cautelaAb } = this.state;
    const { cautelaClos } = this.state
    return (
      <div className="bs-component">
        <Header />
      <Container className="list-users">
        <div className="div">
           HT'S: <hr />
          TOTAL: {produto.length}
          <div className="buton">
            <Link>Detalhes</Link>
          </div>
        </div>
        <div className="div">
          EVENTOS: <hr />
          TOTAL: {eventos.length}
          <div className="buton">
            <Link>Detalhes</Link>
          </div>
        </div>
        <div className="div">
          CAUTELAS EM ABERTO: <hr />
          TOTAL: {cautelaAb.length}
          <div className="buton">
            <Link>Detalhes</Link>
          </div>
        </div>
        <div className="div">
          CAUTELAS ENCERRADAS: <hr />
          TOTAL: {cautelaClos.length}
          <div className="buton">
            <Link>Detalhes</Link>
          </div>
        </div>
        {produto.map(prod => (
          <Form key={prod.id}>
            <strong>Modelo: {prod.descricao}</strong>
            <p>Nº de Série: {prod.idMaterial}</p>
            <p>Setor: {prod.setor}</p>
              <QrCode id="idMaterial"
               value={prod.idMaterial.toString()}
               size={120}
              level={"H"}
              includeMargin={true}
               />
          </Form>
        ))}
      </Container>
      </div>
    )
};

}

export default withRouter(ListUsers);
