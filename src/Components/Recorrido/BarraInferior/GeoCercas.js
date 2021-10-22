import React, { useEffect, useState } from 'react'
import * as s from './GeoCercas.styles'
import { BsBellFill, BsPlus, BsGearFill, BsPencil, BsTrash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { SiCircle } from "react-icons/si";
import { FiTarget } from "react-icons/fi";

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Modal from 'react-modal';
import '../../../styles/modals.css';
import { AiFillCaretDown } from 'react-icons/ai';
import './PopUp.css';
import GeoCercasModal from './GeoCercasModal';

import './PopUp.css';

const GeoCercas = () => {

    /* State */
    const [geoFences, setGeoFences] = useState([]);
    const [modalState, setModalState] = useState(false); // State MODAL
    const [geoItem, setGeoItem] = useState([])

    const GeoCercas = async() =>{
        var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'GET',
                credentials: 'include',
                headers: myHeaders,
                redirect: 'follow'
            };
            
            const resultado = await fetch("https://www.protrack.ad105.net/api/geofences", requestOptions)
                /* .then(response => response.json())
                .catch(error => console.log('error', error)); */
                const geofenceData = await resultado.json();
                /* console.log(deviceData) */
                setGeoFences(geofenceData);
                /* console.log(device) */
    }
    const deleteGeo = async(id) =>{
        
        var confirmar = window.confirm("¿Borrar GeoCerca?");
        if (confirmar) {
            var myHeaders = new Headers();
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Accept", "*/*");

            var requestOptions = {
                method: 'DELETE',
                credentials: 'include',
                headers: myHeaders,
            };
            
            const resultado = await fetch(`https://www.protrack.ad105.net/api/geofences/${id}`, requestOptions)

                window.location.reload();
        }
        else{
            console.log("No se Elimino Geocerca")
        }
    }
    const saveItem = (modal, item) => {
        setModalState(modal);
        setGeoItem(item);
    }

    return (
        <s.Container>
            <s.busqueda_dispositivo>
                <s.CheckBoxSearch type="checkbox"/>
                <s.busqueda_en_linea aria-haspopup="listbox" role="combobox" aria-owns="el-complete-8812">
                    <s.sufijo_entrada>
                        <s.entrada_interna type='text' autoComplete='off' valuekey='value' placeholder='Nombre' />

                    </s.sufijo_entrada>
                </s.busqueda_en_linea>
                <s.GeoAlarm>
                    <BsBellFill/>
                </s.GeoAlarm>
                <s.GeoAlarm>
                    <BsPlus/>
                </s.GeoAlarm>
                <s.GeoAlarm>
                    <IoIosArrowDown/>
                </s.GeoAlarm>
            </s.busqueda_dispositivo>
            <Accordion allowZeroExpanded>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton className="accordion__button2">
                            <AiFillCaretDown/>
                            <s.CheckBox1 type="checkbox"/>
                            Grupo Predeterminado ({geoFences.length})
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel className="itemPanelGeo">
                        {
                            geoFences.map(item => (
                                <s.divGeofenceItem>
                                    <s.GeoItemDiv>
                                        <s.CheckBox1 type="checkbox"/>
                                        <s.SpanGeoItemIcon><FiTarget/></s.SpanGeoItemIcon>
                                        <s.SpanGeoItem id={item.id}>{item.name}</s.SpanGeoItem>
                                    </s.GeoItemDiv>
                                    <s.BuutonDivGeo>
                                        <s.ButtonGeoItem onClick={() => saveItem(true, item)}><BsGearFill/></s.ButtonGeoItem>
                                        <s.ButtonGeoItem><BsPencil/></s.ButtonGeoItem>
                                        <s.ButtonGeoItem onClick={() => deleteGeo(item.id)}><BsTrash/></s.ButtonGeoItem>
                                    </s.BuutonDivGeo>
                                </s.divGeofenceItem>
                            ))
                        }
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
            <Modal 
                isOpen={modalState}
                onRequestClose={() => setModalState(false)}
                style={{
                    overlay: {
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        backgroundColor: 'rgba(15, 15, 15, 0.507)'
                    },
                    content: {
                        width: 650,
                        height: 478
                    }
                }}
            >
                <s.HeaderModal>
                    <s.TituloModal><BsGearFill/> Configuración de GeoCercas</s.TituloModal>
                    <s.CerrarModal onClick={() => setModalState(false)}>+</s.CerrarModal>
                </s.HeaderModal>
                {/* CONTENIDO */}
                <GeoCercasModal data={geoItem}/>
            </Modal>
        </s.Container>
    )
}

export default GeoCercas
