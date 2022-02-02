import React, { useEffect, useState, useContext } from 'react'
import * as s from './GeoCercas.styles'
import { BsBellFill, BsPlus, BsGearFill, BsPencil, BsTrash } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { SiCircle } from "react-icons/si";
import { FiTarget } from "react-icons/fi";
import { FaDrawPolygon } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { HiOutlineViewGridAdd } from "react-icons/hi";
import { AiOutlineClockCircle } from "react-icons/ai";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
import Modal from 'react-modal';
import '../../styles/modals.css';
import { AiFillCaretDown } from 'react-icons/ai';
import './PopUp.css';
import GeoCercasModal from './GeoCercasModal';

import './PopUp.css';
/* CONTEXT */
import {MenContext} from '../../Context/MenuContext';

const GeoCercas = ({ver, ocultar}) => {
    /* State desde context */
    const { drawClick, setDrawClick, colorValue, setColorValue, latFenceCircle, lngFenceCirlce, bounds, radiusFence } = useContext(MenContext);
    /* State */
    const [geoFences, setGeoFences] = useState([]);
    const [modalState, setModalState] = useState(false); // State MODAL
    const [geoItem, setGeoItem] = useState([])
    const [toggle, setToggle] = React.useState(false);
    const [icon, setIcon] = useState(0); // Valor color del colorpicker
    const [nameFence, setNameFence] = useState(""); //Nombre para GEOCERCA
    const [refrsh, setRefrsh] = useState(false);
    const [boundsC, setBoundsC] = useState("");
    const handleToggle = () => {
        setToggle(!toggle)
    }
    const [toggle2, setToggle2] = React.useState(false);
    const mostrarFormGeo = () => {
        setToggle2(!toggle2)
        setDrawClick({
            shape: null,
            active: false,
            color: null,
        })
    }
    const [toggle3, setToggle3] = React.useState(false);
    const timeInput = () => {
        setToggle3(!toggle3)
    }
    useEffect(() => {
        GeoCercas()
    }, [refrsh])
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
            
            try{
                const resultado = await fetch("https://www.protrack.ad105.net/api/geofences", requestOptions)
                const geofenceData = await resultado.json();
                setGeoFences(geofenceData);
            }
            catch(err){
                toast.error("Hubo un problema, intentelo más tarde.");
            }
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

            toast.success("GeoCerca Eliminada con Exito");
            setRefrsh(!refrsh);

        }
        else{
            toast.error("No pudo eliminarse la GeoCerca Seleccionada");
        }
    }
    const saveItem = (modal, item) => {
        setModalState(modal);
        setGeoItem(item);
    }

    const FormGeoCerca = (valor, icon) =>{
        setToggle2(valor);
        handleToggle();
        setIcon(icon);
        if (icon === 1) {
            setDrawClick({
                shape: 'circle',
                active: true,
                color: colorValue,
            })
        }
        if (icon === 2) {
            setDrawClick({
                shape: 'polygon',
                active: true,
                color: colorValue,
            })
        }
    }
    const saveFence = async() => {
        console.log(nameFence);
        if (nameFence === '') {
            return alert("Nombre de Geocerca no puede estar en blanco");
        }
        var dataFence = {}
        if (drawClick.shape === "circle") {
            dataFence = {
                "id": 0,
                "name": `${nameFence}`,
                "description": `${nameFence}`,
                "area": `CIRCLE(${latFenceCircle} ${lngFenceCirlce}, ${radiusFence})`,
                "calendarId": 0,
                "attributes": {
                    "shape": "circle",
                    "color": `${colorValue}`,
                }
            }
        }
        if (drawClick.shape === "polygon") {
            var bnds = bounds.toString().replaceAll('LatLng(', '(');
            var bnds = bnds.replaceAll(',', '');
            var bnds = bnds.replaceAll('(', '');
            var bnds = bnds.replaceAll(')', ',');

            var bnds2 = bounds[0][0];
            var bnds2 = bnds2.toString().replaceAll('LatLng(', '(');
            var bnds2 = bnds2.replaceAll(',', '');
            var bnds2 = bnds2.replaceAll('(', '');
            var bnds2 = bnds2.replaceAll(')', '');

            bnds = '('+bnds+' '+bnds2+')';
            /* console.log("Puntos: "+bounds.toString().replaceAll('LatLng(', '(')); */
            /* console.log(bnds); */
            dataFence = {
                "id": 0,
                "name": `${nameFence}`,
                "description": `${nameFence}`,
                "area": `POLYGON(${bnds})`,
                "calendarId": 0,
                "attributes": {
                    "shape": "polygon",
                    "color": `${colorValue}`,
                }
            }
        }
        console.log(dataFence);
        const response = await fetch("https://www.protrack.ad105.net/api/geofences/", 
                                    {
                                        credentials: 'include',
                                        method: 'POST',
                                        headers:{
                                        'Content-Type': 'application/json',
                                    },
                                    body: JSON.stringify(dataFence)
                                    });
        if(response.ok) {
            const geofence = await response.json();
            console.log(geofence.id);
            toast.success("GeoCerca Agregada con Exito");
        }else{
            toast.error("No se pudo generar GeoCerca");
        }

        setRefrsh(!refrsh);
        setToggle2(false)
        setDrawClick({
            shape: null,
            active: false,
            color: null,
        })
    }
    return (
        <s.Container>
            <ToastContainer 
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                
            />
            <s.geoForm visibility={toggle2}>
                <s.geoFormContent>
                    <s.rowFenceForm>
                        <s.CheckBoxFenceForm type="checkbox" checked/>
                        {
                            icon === 1 ? <BsCircle className="iconsGeoFence" /> : <FaDrawPolygon className="iconsGeoFence" />
                        }
                        <s.entrada_interna type='text' autoComplete='off' placeholder='Nombre GEO-CERCA' onChange={(e) => setNameFence(e.target.value)} />
                        <HiOutlineViewGridAdd className="iconsGeoFenceForm"/>
                        <s.ColorPicker type="color" onChange={(e) => setColorValue(e.target.value)}/>
                        <AiOutlineClockCircle className="iconsGeoFenceForm" onClick={timeInput}/>
                    </s.rowFenceForm>
                    <s.rowFenceForm className="numberFormGeo">
                        <s.entrada_interna type='number' min="0" max="400" step="10" />Km/h
                    </s.rowFenceForm>
                    <s.rowFenceForm2 className="dateFormGeo" visibility={toggle3}>
                        <s.entrada_interna type='time'/>
                    </s.rowFenceForm2>
                    <s.rowFenceForm className="buttonFormGeo">
                        <s.FenceFormButtonAction onClick={saveFence}>Guardar</s.FenceFormButtonAction>
                        <s.FenceFormButtonCancel onClick={mostrarFormGeo}>Cancelar</s.FenceFormButtonCancel>
                    </s.rowFenceForm>
                </s.geoFormContent>
            </s.geoForm>
            <s.busqueda_dispositivo>
                <s.CheckBoxSearch type="checkbox"/>
                <s.busqueda_en_linea aria-haspopup="listbox" role="combobox" aria-owns="el-complete-8812">
                    <s.sufijo_entrada>
                        <s.entrada_interna type='text' autoComplete='off' valuekey='value' placeholder='Nombre' />

                    </s.sufijo_entrada>
                </s.busqueda_en_linea>
                <s.GeoAlarm onClick={() => setModalState(true)}>
                    <BsBellFill/>
                </s.GeoAlarm>
                <s.GeoAlarm onClick={handleToggle}>
                    <BsPlus/>
                </s.GeoAlarm>
                <s.geoFenceOptions visibility={toggle}>
                        <s.geoFenceOpt onClick={() => FormGeoCerca(true, 1)}><BsCircle /> Circulo</s.geoFenceOpt>
                        <s.geoFenceOpt onClick={() => FormGeoCerca(true, 2)}><FaDrawPolygon /> Poligono</s.geoFenceOpt>
                </s.geoFenceOptions>
                <s.GeoAlarm>
                    <IoIosArrowDown/>
                </s.GeoAlarm>
            </s.busqueda_dispositivo>
            <Accordion allowZeroExpanded className="acordion-geo">
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
                                <s.divGeofenceItem key={item.id}>
                                    <s.GeoItemDiv>
                                        <s.CheckBox1 type="checkbox"/>
                                        <s.SpanGeoItemIcon>
                                            {item.attributes.shape === 'circle' ?<BsCircle/> : null}
                                            {item.attributes.shape === 'polygon' ?<FaDrawPolygon/> : null}
                                        </s.SpanGeoItemIcon>
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
