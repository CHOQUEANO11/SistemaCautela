import Alert from 'react';

const api1 = 'https://api.pm.pa.gov.br/';
const api2 = 'http://localhost:3000';

function showError(err) {
  Alert.alert('Ops! Ocorreu um problema!', `Mensagem: ${err}`);
}

export {api1, showError, api2};


/*import axios from "axios";


const api = axios.create({
  baseURL: "https://api.pm.pa.gov.br/"
  //baseURL: "http://127.0.0.1:3333"
});

const api2 = axios.create({
  baseURL: "http://localhost:3000"
})


api.interceptors.request.use(async config => {
  const token = getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default (api, api2);*/
