import React from 'react'
import * as ic from 'react-icons/all';
import * as s from './Notificaciones.styles';

const Notificaciones = () => {
    return (
        <s.Contenedor>
            <s.ContentCheck>
                <s.LabelCheck>
                    <s.CheckBox type="checkbox"/>
                    Recibir Notifiación de Alarma
                </s.LabelCheck>
            </s.ContentCheck>
            <s.ContentAlarm>
                <s.Label>Duración de la Alarma:</s.Label>
                <s.LabelCheck>
                    <s.CheckBox type="checkbox"/>
                    Todo el día
                </s.LabelCheck>
            </s.ContentAlarm>
            <s.Contents>
                <s.Table>
                    <s.THead>
                        <s.Th>Tipo de Alarma</s.Th>
                        <s.Th></s.Th>
                        <s.Th>
                            <s.LabelCheck2>
                                <s.CheckBox type="checkbox"/>
                                Alert List
                            </s.LabelCheck2>
                        </s.Th>
                        <s.Th>
                            <s.LabelCheck2>
                                <s.CheckBox type="checkbox"/>
                                Notificación
                            </s.LabelCheck2>
                        </s.Th>
                        <s.Th>
                            <s.LabelCheck2>
                                <s.CheckBox type="checkbox"/>
                                Aplicación
                            </s.LabelCheck2>
                        </s.Th>
                    </s.THead>
                    <s.TBody></s.TBody>
                </s.Table>
            </s.Contents>
            <s.Contents>
                <s.Label>Correo Electrónico</s.Label>
                <s.ContentInputs>
                    <s.InputGroup>
                        <s.Input type="text"/>
                    </s.InputGroup>
                    <s.PlusButton><ic.AiOutlinePlus /></s.PlusButton>
                    <s.A>Verificar</s.A>
                </s.ContentInputs>
                <s.InputGroup>
                    <s.Label>Móvil</s.Label>
                    <s.Input type="text"/>
                    </s.InputGroup>
            </s.Contents>
        </s.Contenedor>
    )
}

export default Notificaciones
