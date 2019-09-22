import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from '../../components/Header';
import axios from "axios";
import {api2} from "../../services/api";
import { Form, Container } from "./styles";
import moment from "moment";
import 'moment/locale/pt-br';




class Report extends Component {
  state = {
    produto: [],
    card: false,
    eventos: [],
    cautelaAb: [],
    cautelaClos: [],
    titulo: '',
    cauthVisible: true,
    users: [],
    cautelas: '',
    viewCautela: [],
  };



  async componentDidMount() {
    const mytoken = localStorage.getItem('token')
    console.log(mytoken)
    this.loadUsers()
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
    console.log(cautOpen);

    const cautela  = await axios.get(`${api2}/api/cautela/1`);
    const cautelaDetail = cautela.data.payload;
    this.setState({
      cautelaAb: cautelaDetail
    })
    console.log(cautelaDetail);

  }

  abrirCautela = async e => {
    const abrir = await axios.get(`${api2}/api/cautela/${e.id}`)
    const abrirEvent = abrir.data.payload;
    localStorage.setItem('detail', JSON.stringify(abrir.data))
    console.log(abrirEvent)
    this.props.history.push("/detailreport", e.id);
  };


  render() {
    const { eventos } = this.state;
    return (
      <div className="bs-component">
      <Header />
      <Container className="list-users">
      <div className="div" >
      <Link>
      {eventos.map(evento => (
          <Form key={evento.id} onClick={()=>this.abrirCautela(evento)}>
            <h5>EVENTO: {evento.nome}</h5>
            <p>COMANDANTE: {evento.nomeComandante}</p>
            <p>LOCAL: {evento.local}</p>
            <p>DATA: {''}
            {moment(evento.data).format(
                    "DD [de] MMMM [de] YYYY [às] HH:mm", "pt", true
                  )}</p>
          </Form>
        ))}
        </Link>
        </div>
      </Container>
      </div>
    )
  }

}

export default withRouter(Report);
