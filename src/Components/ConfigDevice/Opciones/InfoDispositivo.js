import React from 'react'
import * as s from './Opciones.styles';

import ic1 from '../../../assets/images/ModalIcons/11.ae94794.png';
import ic2 from '../../../assets/images/ModalIcons/12.0215ff3.png';
import ic3 from '../../../assets/images/ModalIcons/19.png';
import ic4 from '../../../assets/images/ModalIcons/20.png';
import ic5 from '../../../assets/images/ModalIcons/21.1c15ad0.png';
import ic6 from '../../../assets/images/ModalIcons/22.69ae519.png';
import ic7 from '../../../assets/images/ModalIcons/34.49e948a.png';
import ic8 from '../../../assets/images/ModalIcons/35.b839fed.png';
import ic9 from '../../../assets/images/ModalIcons/24.47a7eae.png';
import ic10 from '../../../assets/images/ModalIcons/25.7624633.png';
import ic11 from '../../../assets/images/ModalIcons/38.eb3afa2.png';
import ic12 from '../../../assets/images/ModalIcons/27.26b2688.png';
import ic13 from '../../../assets/images/ModalIcons/28.66233fb.png';
import ic14 from '../../../assets/images/ModalIcons/29.3582709.png';
import ic15 from '../../../assets/images/ModalIcons/30.78848b9.png';
import ic16 from '../../../assets/images/ModalIcons/36.186c264.png';
import ic17 from '../../../assets/images/ModalIcons/37.1c6f4cc.png';
import ic18 from '../../../assets/images/ModalIcons/26.a2c51c4.png';
import ic19 from '../../../assets/images/ModalIcons/33.ea4f203.png';
import ic20 from '../../../assets/images/ModalIcons/23.d89de37.png';

const InfoDispositivo = () => {
    return (
        <s.Contenedor>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Nombre:</s.Label>
                    <s.InputOtraInfo type="text" style={{ width: '240px' }}/>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Número de placa del vehículo:</s.Label>
                    <s.InputOtraInfo type="text" style={{ width: '240px' }}/>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>IMEI:</s.Label>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Tipo:</s.Label>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Sim Card:</s.Label>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Tiempo Online:</s.Label>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Fecha de Vencimiento:</s.Label>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Última Actualización:</s.Label>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.Label>Icono:</s.Label>
                    <s.DivIcons>
                        <s.IconItem><s.Icons src={ic1}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic2}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic3}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic4}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic5}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic6}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic7}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic8}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic9}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic10}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic11}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic12}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic13}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic14}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic15}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic16}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic17}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic18}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic19}/></s.IconItem>
                        <s.IconItem><s.Icons src={ic20}/></s.IconItem>
                    </s.DivIcons>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Imagen del Vehículo:</s.Label>
                    <s.InputOtraInfo type="file" />
                </s.InputGroup>
            </s.Container>
            <s.InputGroupTextArea>
                    <s.Label>Observación:</s.Label>
                    <s.TextArea></s.TextArea>
            </s.InputGroupTextArea>
        </s.Contenedor>
    )
}

export default InfoDispositivo
