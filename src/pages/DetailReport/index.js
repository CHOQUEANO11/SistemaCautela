import React, { Component } from "react";
import { withRouter, Link } from "react-router-dom";
import Header from '../../components/Header';
import axios from "axios";
import {api2} from "../../services/api";
import { Form, Container } from "./styles";
import moment from "moment";
import 'moment/locale/pt-br';



class DetailReport extends Component {
  state = {
    eventos: [],
    titulo: '',
    cautelas: '',
    viewCautela: [],
    inforDetail: ''
  };


  async componentDidMount() {
    const mytoken = localStorage.getItem('token')
    const miDetail = localStorage.getItem('detail')
    console.log(mytoken)
    const info = JSON.parse(miDetail);

  this.setState({
    inforDetail: info

  })
  console.log(info)
    this.loadDetail();
  }

  loadDetail = async () => {
    const token = localStorage.getItem('token');

    const header = {
      "Authorization" : `Bearer ${token}`
    }

    const event = await axios.get(`${api2}/api/evento/all`, {headers: header});
    const even = event.data.payload
    console.log(even)

    this.setState({
      eventos: even
    })
    console.log(even);
  }

  render() {
    const {
      inforDetail
    } = this.state;


    const {
      eventos
    } = this.state;



    if(typeof inforDetail.payload === 'undefined'){
      return null;;
    }



    return (
      <div className="bs-component">
      <Header />
      <Container className="list-users">
      <div className="div" >
            <Link to="/report" className="link1">
            <h6 style={{float: "right"}}>Voltar</h6>
              <h5>Detalhe {eventos.nome}</h5>
            </Link>
        {inforDetail.payload.map((item, index) => (
          <Form key={index.id}>
            {console.log(eventos)}
            <p>Recebedor: {item.nomeRecebedor}</p>
            <p>Tel. Recebedor: {item.contato}</p>
            <p>Cautelador: {item.nomeCautelador}</p>
            <p>Nº da Cautela: {item.id}</p>
            <p>Cautela Fechada Por: {item.nomeDescautelador}</p>
            <p>Início: {''}
            {moment(item.createdAt).format(
                    "DD [de] MMMM [de] YYYY [às] HH:mm", "pt", true
                  )}</p>
            <p>Fim: {''}
            {moment(item.updatedAt).format(
                    "DD [de] MMMM [de] YYYY [às] HH:mm", "pt", true
                  )}</p>
          </Form>
        ))}
        </div>
      </Container>
      </div>
    )
  }
}






export default withRouter(DetailReport);
