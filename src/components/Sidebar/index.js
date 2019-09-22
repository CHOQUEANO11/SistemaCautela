import React, {useState} from 'react';
import * as ReactDOM from "react-dom";
import {Drawer} from 'react-pretty-drawer';
import Logo from "../../assets/images/logoCitel.png";
import { Link, withRouter } from "react-router-dom";
import { FaEdit, FaList, FaClipboardList } from 'react-icons/fa';
import moment from "moment";
import 'moment/locale/pt-br';

const data = moment().format("DD [de] MMMM [de] YYYY", "pt", true);




const Example = () => {
    let [visible, setIsVisible] = useState(false);

    const closeDrawer = () => setIsVisible(false);
    const openDrawer = () => setIsVisible(true);

    return (
        <div >
            <Drawer
                visible={visible}
                onClose={closeDrawer}
            >
                <div style={{ border: 3 }}>
                  <Link to="/apresentation">
                <img src={Logo} alt="Airbnb logo" onClick={"/apresentation"} style={{width: 100, height: 120, marginTop: 120,
                 marginLeft: 70, marginBlockEnd: 40}} />
                 </Link>
                </div>
                <hr style={{borderWidth: 4}} />
                <div style={{marginLeft: 35 }}><moment>{data}</moment></div>
                <hr style={{borderWidth: 4}} />
                <div style={{marginTop: 20}}>
                <Link to="/home" style={{fontSize: 20, cursor: 'pointer'}} > <FaEdit color='#00008B' size={30} />  Cadastrar HT's</Link>
                </div>
                <div style={{marginTop: 20}}>
                <Link to="/listusers" style={{fontSize: 20, cursor: 'pointer'}}> <FaList color='#00008B' size={30} />  Listar HT's</Link>
                </div>
                <div style={{marginTop: 20}}>
                <Link to="/report" style={{fontSize: 20, cursor: 'pointer'}}> <FaClipboardList color='#00008B' size={30} />  Relatório</Link>
                </div>
            </Drawer>
            <h3 onClick={openDrawer} style={{color: 'white',
             cursor: 'pointer', fontFamily: 'roboto'}}>SISTEMA DE CAUTELA CIRIO DE NAZARÉ</h3>
        </div>
    );
};

ReactDOM.render(<Example />, document.getElementById("root"));

export default withRouter(Example);
