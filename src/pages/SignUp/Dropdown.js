import React from 'react';
import { withRouter, Link } from "react-router-dom";
import './style.css';


class SignUp extends React.Component {
constructor(){
 super();

 this.state = {
       displayMenu: false,
      inform: ''
     };

  this.showDropdownMenu = this.showDropdownMenu.bind(this);
  this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

};

async componentDidMount() {
  const dados =  localStorage.getItem('userData');
  const info = JSON.parse(dados);
  console.log(info)

  this.setState({
    inform: info
  })
}

showDropdownMenu(event) {
    event.preventDefault();
    this.setState({ displayMenu: true }, () => {
    document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu() {
    this.setState({ displayMenu: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });

  }

  render() {
    return (
        <div className="dropdown" style = {{width:"20px"}}>
         <div className="button" onClick={this.showDropdownMenu}>CITEL</div>
          { this.state.displayMenu ? (
          <ul>
         <li>Nome: {this.state.inform.payload.nome_guerra}</li>
         <li>Unidade: {this.state.inform.payload.Unidade.sigla_unidade}</li>
         <Link to="/" className="link">Sair</Link>
          </ul>
        ):
        (
          null
        )
        }
       </div>
    );
  }
}

export default withRouter(SignUp);

