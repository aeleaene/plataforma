import React, {useState} from 'react'
import * as s from './Opciones.styles';

const ConfigAlarma = () => {

   const [alarma, setAlarma] = useState(false)

    return (
        <s.Contenedor>
            <s.Container>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Acc Apagado:</s.LabelCheckbox>
                </s.InputGroup>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Acc Encendido:</s.LabelCheckbox>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Puerta Abierta:</s.LabelCheckbox>
                </s.InputGroup>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Puerta Cerrada:</s.LabelCheckbox>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Alerta de Fuga de Aceite:</s.LabelCheckbox>
                </s.InputGroup>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Alerta de Repostaje:</s.LabelCheckbox>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Exceso de velocidad de alarma:</s.LabelCheckbox>
                </s.InputGroup>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Ralentí Mínimo:</s.LabelCheckbox>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Alerta Fuera de Línea:</s.LabelCheckbox>
                </s.InputGroup>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Alerta de Estacionamiento:</s.LabelCheckbox>
                </s.InputGroup>
            </s.Container>
            <s.Container>
                <s.InputGroup>
                    <s.LabelCheckbox><s.CheckBox1 type="checkbox"/> Alerta de Conducción restringida:</s.LabelCheckbox>
                </s.InputGroup>
            </s.Container>
        </s.Contenedor>
    )
}

export default ConfigAlarma
