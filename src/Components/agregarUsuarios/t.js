import React, {useState} from 'react'; 

import * as ri from 'react-icons/all';

import * as sd from './agregarUsuarios.styles';
import * as s from '../ContenidoAdminDashboard/ContenidoAdminDashboard.styles';



const T = (props) => {

    const [enterprise, setEnterprise] = useState('');
    const [contacto, setContacto] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [movil, setMovil] = useState('');
    const [direccion, setDireccion] = useState('');
    const [webSite, setWebSite] = useState('');

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
          body: JSON.stringify({name, email, password, phone})
        });
    
        if (response.ok) {
            console.log('Estado: 200')
        } 
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
                                                            <sd.el_input_inner />
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
                                                            <sd.el_input_inner />
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
                                                <sd.el_input_inner onChange={event => setDireccion(event.target.value)}/>
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