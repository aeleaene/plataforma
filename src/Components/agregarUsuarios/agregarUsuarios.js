import React , { useState }from 'react';

import * as sd from './agregarUsuarios.styles';
import * as s from '../ContenidoAdminDashboard/ContenidoAdminDashboard.styles';

import BarraSuperior from '../BarraSuperiorAdmin/BarraSuperior';
import ContenidoAdmin from '../ContenidoAdmin/ContenidoAdmin';




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

                </s.app_main>
            </s.app>
            <s.main_cointainer>
                <BarraSuperior />
                <ContenidoAdmin />
                <form>     
                <label>
                Nombre:
                <input type="text" onChange={event => setName(event.target.value)} />
                </label>
                <label>
                Contraseña:
                <input type="password" onChange={event => setPassword(event.target.value)}/>
                </label>
                <label>
                Email:
                <input type="email" onChange={event => setEmail(event.target.value)} />
                </label>
                <button value="enviar" onClick={enviar} >Enviar</button>
                </form>

            </s.main_cointainer>
        </s.body>          
    )
}

export default AgregarUsuario;