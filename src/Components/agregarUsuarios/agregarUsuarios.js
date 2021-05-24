import React , { useState }from 'react';

import * as sd from './agregarUsuarios.styles';
import * as s from '../ContenidoAdminDashboard/ContenidoAdminDashboard.styles';

import BarraSuperior from '../BarraSuperiorAdmin/BarraSuperior';
import ContenidoAdmin from '../ContenidoAdmin/ContenidoAdmin';

import BarraLateralAdmin from '../BarraLateralAdmin/BarraLateralAdmin';

import T from './t';




const AgregarUsuario = (props) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const enviar = (e) => {
        e.preventDefault();
        handleEnviar();
    }

    const handleEnviar = async () => {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
                     'Credentials': 'include',
                     'Accept':'*/*'    },
          body: JSON.stringify({name, email, password})
        });
    
        if (response.ok) {
            console.log('Estado: 200')
        } 
      }

    return(
        <s.body>
            <s.app id="app">
                <s.app_main>
                <s.sidebar_container>
                    <BarraLateralAdmin />
                </s.sidebar_container>
                </s.app_main>
            </s.app>
            <s.main_cointainer>
                <BarraSuperior />
                <ContenidoAdmin />
                <T/>
            </s.main_cointainer>
        </s.body>          
    )
}

export default AgregarUsuario;