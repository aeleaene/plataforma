import React, {useState} from 'react'; 

import * as ri from 'react-icons/all';

import * as sd from './agregarDispositivos.styles';
import * as s from '../ContenidoAdminDashboard/ContenidoAdminDashboard.styles';

import BarraLateralAdmin from '../BarraLateralAdmin/BarraLateralAdmin';
import BarraSuperior from '../BarraSuperiorAdmin/BarraSuperior';
import ContenidoAdmin from '../ContenidoAdmin/ContenidoAdmin';



const T = (props) => {

    const [name, setName] = useState('');
    const [model, setModel] = useState('');
    const [uniqueId, setUniqueId] = useState('');
    const [attributes, setAttributes] = useState('');

    const [users, setUsers] = useState('');

    const handleMostarar = async() => {
        const response = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Credentials': 'include',
                'Accept':'*/*',
            }
        });
        if(response.ok){
            console.log(response.status);
        }else{
            console.log('Algo salió mal')
        }
    }

    const mostrar = (e) => {
        e.preventDefault();
        var datos = JSON.stringify({name, uniqueId, model});
        console.log(datos);
        handleEnviar();
        {/*console.log('Mostrando usuarios');
    handleMostarar();*/}
    }

    const enviar = (e) => {
        e.preventDefault();
        console.log('DATOS'+name+', '+uniqueId)
        handleEnviar();
    }

    const handleEnviar = async () => {
        const response = await fetch('/api/devices', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
                     'Credentials': 'include',
                     'Accept':'*/*'    },
          body: JSON.stringify({name, uniqueId, model})
        });
    
        if (response.ok) {
            console.log('Estado: 200')
        } 
      }

    return(
        <s.main_cointainer>
            <sd.h100b>                    
                    <sd.block_titlebar>Añadir Objetivos</sd.block_titlebar>
                    <sd.has_titlebar_content>
                        <sd.el_scroll_wrap>
                            <sd.el_scroll_view>
                        <sd.device_add>
                        <sd.el_form>
                        <sd.el_form_item>
                            <sd.el_form_item_label>Saldo</sd.el_form_item_label>
                            <sd.el_form_item_content>
                                <sd.table_balance>
                                    <tr>

                                        <sd.tede>" 0 "
                                            <sd.eme>Nueva Tarjeta</sd.eme>
                                        </sd.tede>

                                        <sd.tede>" 0 "
                                            <sd.eme>Nueva Tarjeta de por vida</sd.eme>
                                        </sd.tede>

                                    </tr>

                                </sd.table_balance>
                            </sd.el_form_item_content>
                        </sd.el_form_item>

                        <sd.el_form_item_is_required>
                            <sd.el_form_item_label>Meta cliente</sd.el_form_item_label>
                            <sd.el_form_item_content>
                                <sd.user_tree_select>
                                    <sd.data_tips>
                                        <sd.el_autocomplete>
                                            <sd.el_input>
                                                <sd.select type="text" onChange={event => setName(event.target.value)}></sd.select>
                                                <sd.el_input_group_append>
                                                    <sd.el_button onClick={mostrar}>< ri.RiArrowDownSLine/></sd.el_button>
                                                </sd.el_input_group_append>
                                            </sd.el_input>
                                        </sd.el_autocomplete>
                                    </sd.data_tips>
                                </sd.user_tree_select>
                            </sd.el_form_item_content>
                        </sd.el_form_item_is_required>

                        <sd.el_form_item_is_required>
                            <sd.el_form_item_label>Tipo</sd.el_form_item_label>
                            <sd.el_form_item_content>
                                <sd.user_tree_select>
                                    <sd.data_tips>
                                        <sd.el_autocomplete>
                                            <sd.el_input>
                                                <sd.select type="text" onChange={event => setModel(event.target.value)}></sd.select>
                                                <sd.el_input_group_append>
                                                    <sd.el_button>< ri.RiArrowDownSLine/></sd.el_button>
                                                    
                                                </sd.el_input_group_append>
                                            </sd.el_input>
                                        </sd.el_autocomplete>
                                    </sd.data_tips>
                                </sd.user_tree_select>
                                
                            </sd.el_form_item_content>
                            <sd.link_dev>Dispositivos soportados >></sd.link_dev>
                        </sd.el_form_item_is_required>

                        <sd.el_form_item_is_required>

                        <sd.el_form_item_label>Tipo de tarjeta</sd.el_form_item_label>
                        <sd.el_form_item_content>
                            <sd.el_radio>
                                <sd.el_radio_input_is_checked>
                                    
                                    <input type="radio"/>
                                </sd.el_radio_input_is_checked>
                                <sd.el_radio_label>Nueva tarjeta</sd.el_radio_label>
                            </sd.el_radio>

                            <sd.el_radio>
                                <sd.el_radio_input_is_checked>
                                    <input type="radio"/>
                                </sd.el_radio_input_is_checked>
                                <label>Nueva tarjeta de por vida</label>
                            </sd.el_radio>

                        </sd.el_form_item_content>
                        </sd.el_form_item_is_required>

                        <sd.el_form_item_is_required>
                        <sd.el_form_item_label>IMEI</sd.el_form_item_label>
                            <sd.el_form_item_content>
                                <sd.el_text_area>
                                <sd.el_text_area_inner autoComplete="off" rows="3" placeholder="Un IMEI una línea" onChange={event => setUniqueId(event.target.value)}/>
                                </sd.el_text_area>
                                <sd.desc>Un lote para 500 IMEI como máximo.</sd.desc>                                
                            </sd.el_form_item_content>
                        </sd.el_form_item_is_required>
                        
                        <sd.el_form_item>
                            <sd.el_form_item_label>Observación</sd.el_form_item_label>
                            <sd.el_form_item_content>
                                <sd.el_text_area>
                                <sd.el_text_area_inner autoComplete="off" rows="3" onChange={event => JSON.stringify(setAttributes(event.target.value))}/>
                                </sd.el_text_area>
                            </sd.el_form_item_content>
                        </sd.el_form_item>

                        <sd.el_form_item_frm_btn_box>
                            <sd.el_form_item_content>
                                <sd.el_button_primary onClick={mostrar}><span>Enviar</span></sd.el_button_primary>
                                <sd.el_button_default><span>Reiniciar</span></sd.el_button_default>
                            </sd.el_form_item_content>
                        </sd.el_form_item_frm_btn_box>


                    </sd.el_form>
                    </sd.device_add>
                    </sd.el_scroll_view>
                        </sd.el_scroll_wrap>
                    </sd.has_titlebar_content>
                    
                    </sd.h100b>
        </s.main_cointainer>
        
    )
}

export default T;