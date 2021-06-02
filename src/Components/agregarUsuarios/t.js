import React, {useState, useEffect} from 'react'; 

import * as ri from 'react-icons/all';

import * as sd from './agregarUsuarios.styles';
import * as s from '../ContenidoAdminDashboard/ContenidoAdminDashboard.styles';



const T = (props) => {



    const [timeZones, setTimeZones] = useState([
        {
          "offset": "GMT-12:00",
          "name": "Etc/GMT-12"
        },
        {
          "offset": "GMT-11:00",
          "name": "Etc/GMT-11"
        },
        {
          "offset": "GMT-11:00",
          "name": "Pacific/Midway"
        },
        {
          "offset": "GMT-10:00",
          "name": "America/Adak"
        },
        {
          "offset": "GMT-09:00",
          "name": "America/Anchorage"
        },
        {
          "offset": "GMT-09:00",
          "name": "Pacific/Gambier"
        },
        {
          "offset": "GMT-08:00",
          "name": "America/Dawson_Creek"
        },
        {
          "offset": "GMT-08:00",
          "name": "America/Ensenada"
        },
        {
          "offset": "GMT-08:00",
          "name": "America/Los_Angeles"
        },
        {
          "offset": "GMT-07:00",
          "name": "America/Chihuahua"
        },
        {
          "offset": "GMT-07:00",
          "name": "America/Denver"
        },
        {
          "offset": "GMT-06:00",
          "name": "America/Belize"
        },
        {
          "offset": "GMT-06:00",
          "name": "America/Cancun"
        },
        {
          "offset": "GMT-06:00",
          "name": "America/Chicago"
        },
        {
          "offset": "GMT-06:00",
          "name": "Chile/EasterIsland"
        },
        {
          "offset": "GMT-05:00",
          "name": "America/Bogota"
        },
        {
          "offset": "GMT-05:00",
          "name": "America/Havana"
        },
        {
          "offset": "GMT-05:00",
          "name": "America/New_York"
        },
        {
          "offset": "GMT-04:30",
          "name": "America/Caracas"
        },
        {
          "offset": "GMT-04:00",
          "name": "America/Campo_Grande"
        },
        {
          "offset": "GMT-04:00",
          "name": "America/Glace_Bay"
        },
        {
          "offset": "GMT-04:00",
          "name": "America/Goose_Bay"
        },
        {
          "offset": "GMT-04:00",
          "name": "America/Santiago"
        },
        {
          "offset": "GMT-04:00",
          "name": "America/La_Paz"
        },
        {
          "offset": "GMT-03:00",
          "name": "America/Argentina/Buenos_Aires"
        },
        {
          "offset": "GMT-03:00",
          "name": "America/Montevideo"
        },
        {
          "offset": "GMT-03:00",
          "name": "America/Araguaina"
        },
        {
          "offset": "GMT-03:00",
          "name": "America/Godthab"
        },
        {
          "offset": "GMT-03:00",
          "name": "America/Miquelon"
        },
        {
          "offset": "GMT-03:00",
          "name": "America/Sao_Paulo"
        },
        {
          "offset": "GMT-03:30",
          "name": "America/St_Johns"
        },
        {
          "offset": "GMT-02:00",
          "name": "America/Noronha"
        },
        {
          "offset": "GMT-01:00",
          "name": "Atlantic/Cape_Verde"
        },
        {
          "offset": "GMT",
          "name": "Europe/Belfast"
        },
        {
          "offset": "GMT",
          "name": "Africa/Abidjan"
        },
        {
          "offset": "GMT",
          "name": "Europe/Dublin"
        },
        {
          "offset": "GMT",
          "name": "Europe/Lisbon"
        },
        {
          "offset": "GMT",
          "name": "Europe/London"
        },
        {
          "offset": "UTC",
          "name": "UTC"
        },
        {
          "offset": "GMT+01:00",
          "name": "Africa/Algiers"
        },
        {
          "offset": "GMT+01:00",
          "name": "Africa/Windhoek"
        },
        {
          "offset": "GMT+01:00",
          "name": "Atlantic/Azores"
        },
        {
          "offset": "GMT+01:00",
          "name": "Atlantic/Stanley"
        },
        {
          "offset": "GMT+01:00",
          "name": "Europe/Amsterdam"
        },
        {
          "offset": "GMT+01:00",
          "name": "Europe/Belgrade"
        },
        {
          "offset": "GMT+01:00",
          "name": "Europe/Brussels"
        },
        {
          "offset": "GMT+02:00",
          "name": "Africa/Cairo"
        },
        {
          "offset": "GMT+02:00",
          "name": "Africa/Blantyre"
        },
        {
          "offset": "GMT+02:00",
          "name": "Asia/Beirut"
        },
        {
          "offset": "GMT+02:00",
          "name": "Asia/Damascus"
        },
        {
          "offset": "GMT+02:00",
          "name": "Asia/Gaza"
        },
        {
          "offset": "GMT+02:00",
          "name": "Asia/Jerusalem"
        },
        {
          "offset": "GMT+03:00",
          "name": "Africa/Addis_Ababa"
        },
        {
          "offset": "GMT+03:00",
          "name": "Asia/Riyadh89"
        },
        {
          "offset": "GMT+03:00",
          "name": "Europe/Minsk"
        },
        {
          "offset": "GMT+03:30",
          "name": "Asia/Tehran"
        },
        {
          "offset": "GMT+04:00",
          "name": "Asia/Dubai"
        },
        {
          "offset": "GMT+04:00",
          "name": "Asia/Yerevan"
        },
        {
          "offset": "GMT+04:00",
          "name": "Europe/Moscow"
        },
        {
          "offset": "GMT+04:30",
          "name": "Asia/Kabul"
        },
        {
          "offset": "GMT+05:00",
          "name": "Asia/Tashkent"
        },
        {
          "offset": "GMT+05:30",
          "name": "Asia/Kolkata"
        },
        {
          "offset": "GMT+05:45",
          "name": "Asia/Katmandu"
        },
        {
          "offset": "GMT+06:00",
          "name": "Asia/Dhaka"
        },
        {
          "offset": "GMT+06:00",
          "name": "Asia/Yekaterinburg"
        },
        {
          "offset": "GMT+06:30",
          "name": "Asia/Rangoon"
        },
        {
          "offset": "GMT+07:00",
          "name": "Asia/Bangkok"
        },
        {
          "offset": "GMT+07:00",
          "name": "Asia/Novosibirsk"
        },
        {
          "offset": "GMT+08:00",
          "name": "Etc/GMT+8"
        },
        {
          "offset": "GMT+08:00",
          "name": "Asia/Hong_Kong"
        },
        {
          "offset": "GMT+08:00",
          "name": "Asia/Krasnoyarsk"
        },
        {
          "offset": "GMT+08:00",
          "name": "Australia/Perth"
        },
        {
          "offset": "GMT+08:45",
          "name": "Australia/Eucla"
        },
        {
          "offset": "GMT+09:00",
          "name": "Asia/Irkutsk"
        },
        {
          "offset": "GMT+09:00",
          "name": "Asia/Seoul"
        },
        {
          "offset": "GMT+09:00",
          "name": "Asia/Tokyo"
        },
        {
          "offset": "GMT+09:30",
          "name": "Australia/Adelaide"
        },
        {
          "offset": "GMT+09:30",
          "name": "Australia/Darwin"
        },
        {
          "offset": "GMT+09:30",
          "name": "Pacific/Marquesas"
        },
        {
          "offset": "GMT+10:00",
          "name": "Etc/GMT+10"
        },
        {
          "offset": "GMT+10:00",
          "name": "Australia/Brisbane"
        },
        {
          "offset": "GMT+10:00",
          "name": "Australia/Hobart"
        },
        {
          "offset": "GMT+10:00",
          "name": "Asia/Yakutsk"
        },
        {
          "offset": "GMT+10:30",
          "name": "Australia/Lord_Howe"
        },
        {
          "offset": "GMT+11:00",
          "name": "Asia/Vladivostok"
        },
        {
          "offset": "GMT+11:30",
          "name": "Pacific/Norfolk"
        },
        {
          "offset": "GMT+12:00",
          "name": "Etc/GMT+12"
        },
        {
          "offset": "GMT+12:00",
          "name": "Asia/Anadyr"
        },
        {
          "offset": "GMT+12:00",
          "name": "Asia/Magadan"
        },
        {
          "offset": "GMT+12:00",
          "name": "Pacific/Auckland"
        },
        {
          "offset": "GMT+12:45",
          "name": "Pacific/Chatham"
        },
        {
          "offset": "GMT+13:00",
          "name": "Pacific/Tongatapu"
        },
        {
          "offset": "GMT+14:00",
          "name": "Pacific/Kiritimati"
        }
      ]);

      const [enterprise, setEnterprise] = useState('');
      const [contacto, setContacto] = useState('');
      const [name, setName] = useState('');
      const [email, setEmail] = useState('');
      const [password, setPassword] = useState('');
      const [phone, setPhone] = useState('');
      const [movil, setMovil] = useState('');
      const [direccion, setDireccion] = useState('');
      const [webSite, setWebSite] = useState('');
      const [users, setUsers] = useState([]);
      const [tz, setTz] = useState('');
      const [attributes, setAttributes] = useState([]);
      const [client, setClient] = useState('');

      const handleEnviar = async () => {
        const response = await fetch('/api/users', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json',
                     'Credentials': 'include',
                     'Accept':'*/*'    },
          body: JSON.stringify({name, email, password, phone, attributes: {direccion, webSite, movil, contacto, enterprise, tz, client}})
        });
    
        if (response.ok) {
            console.log('Estado: 200')
        } 
      }


    const handleMostarar = async() => {
        const response = await fetch('/api/users', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Credentials': 'include',
                'Accept':'*/*',
            }
        }).then(response =>response.json()
        .then(data=>{setUsers(data)})
        );
    }

    useEffect(() => {
        handleMostarar();
    }, []);

    const enviar = (e) => {
        e.preventDefault();
        handleEnviar();
    }



    return(
        <sd.add_user_page_h100b>
            <sd.block_titlebar>Añadir al cliente &nbsp; &nbsp; <sd.set_template><ri.VscGear /> Configuración</sd.set_template></sd.block_titlebar>

            <sd.has_titlebar_content>
                <sd.el_scrollbar_wrap>
                    <sd.el_scrollbar_view>
                        <sd.submit_form_box>
                            <sd.el_form_user_add_half_form>

                                <sd.el_row>

                                    <sd.el_form_item_online_is_required>
                                        <sd.el_form_item_label>Atención al cliente superior</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.user_tree_select>
                                                <sd.data_tips_ >
                                                    <sd.el_auto_complete aria-haspopup="listbox" role="combobox" aria-owns="el_auto_complete_5676">
                                                        <sd.el_input_group>
                                                            <sd.select onChange={event => setClient(event.target.value)}>
                                                            <optgroup label="admin">
                                                            {users.length > 0 &&
                                                            users.map(item => (
                                                            <option key={item._id} value={item.name}>
                                                            {item.name}
                                                             </option>
                                                            ))}
                                                            </optgroup>
                                                            </sd.select>
                                                            <sd.el_input_group_append><sd.el_button_select_btn><ri.MdKeyboardArrowDown/></sd.el_button_select_btn></sd.el_input_group_append>
                                                        </sd.el_input_group>
                                                    </sd.el_auto_complete>
                                                </sd.data_tips_>
                                            </sd.user_tree_select>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item_online_is_required>

                                    <sd.el_form_item_is_required>
                                        <sd.el_form_item_label>Cuenta de inicio de sesión</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner onChange={event => setName(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item_is_required>

                                    <sd.el_form_item>
                                        <sd.el_form_item_label>Nombre de la empresa</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner onChange={event => setEnterprise(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item>

                                    <sd.el_form_item_is_required>
                                        <sd.el_form_item_label>Contraseña</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner type="password" onChange={event => setPassword(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item_is_required>

                                    <sd.el_form_item>
                                        <sd.el_form_item_label>Confirmar contraseña</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner type="password"/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item>

                                    <sd.el_form_item_online_is_required>
                                        <sd.el_form_item_label>Tipo de cliente</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_radio></sd.el_radio>
                                            <sd.el_radio></sd.el_radio>
                                            <sd.el_radio></sd.el_radio>
                                            <sd.el_radio></sd.el_radio>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item_online_is_required>

                                    <sd.el_form_item_online_is_required>
                                        <sd.el_form_item_label>Zona horaria</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.user_tree_select>
                                                <sd.data_tips_ >
                                                    <sd.el_auto_complete aria-haspopup="listbox" role="combobox" aria-owns="el_auto_complete_5676">
                                                        <sd.el_input_group>
                                                        <sd.select onChange={event => setTz(event.target.value)}>
                                                            {timeZones.length > 0 &&
                                                            timeZones.map(item => (
                                                            <option key={item._id} value={item.offset}>
                                                            {item.offset}
                                                             </option>
                                                            ))}
                                                            </sd.select>
                                                            <sd.el_input_group_append><sd.el_button_select_btn><ri.MdKeyboardArrowDown/></sd.el_button_select_btn></sd.el_input_group_append>
                                                        </sd.el_input_group>
                                                    </sd.el_auto_complete>
                                                </sd.data_tips_>
                                            </sd.user_tree_select>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item_online_is_required>

                                    <sd.el_form_item_is_required>
                                        <sd.el_form_item_label>Contacto</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner onChange={event => setContacto(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item_is_required>

                                    <sd.el_form_item>
                                        <sd.el_form_item_label>Móvil</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner type="tel" onChange={event => setMovil(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item>

                                    <sd.el_form_item_is_required>
                                        <sd.el_form_item_label>Teléfono</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner type="tel" onChange={event => setPhone(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item_is_required>

                                    <sd.el_form_item>
                                        <sd.el_form_item_label>Correo electrónico</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner onChange={event => setEmail(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item>

                                    <sd.el_form_item_is_required>
                                        <sd.el_form_item_label>Dirección</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner onChange={event => setDireccion(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item_is_required>

                                    <sd.el_form_item>
                                        <sd.el_form_item_label>Página web</sd.el_form_item_label>
                                        <sd.el_form_item_content>
                                            <sd.el_input_suffix>
                                                <sd.el_input_inner onChange={event => setWebSite(event.target.value)}/>
                                            </sd.el_input_suffix>
                                        </sd.el_form_item_content>
                                    </sd.el_form_item>
                                    

                                </sd.el_row>

                                <sd.el_form_item_form_btn_box>
                                    <sd.el_form_item_content>
                                        <sd.el_button_primary onClick={enviar}><span>Confirmar</span></sd.el_button_primary>
                                        <sd.el_button_default><span>Reiniciar</span></sd.el_button_default>
                                    </sd.el_form_item_content>
                                </sd.el_form_item_form_btn_box>

                            </sd.el_form_user_add_half_form>
                        </sd.submit_form_box>
                    </sd.el_scrollbar_view>
                </sd.el_scrollbar_wrap>
            </sd.has_titlebar_content>

        </sd.add_user_page_h100b>
    )


}

export default T;