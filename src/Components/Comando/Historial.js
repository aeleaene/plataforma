import React from 'react'
import * as s from './Comando.styles';

const Historial = () => {
    return (
        <s.HistorialBody>
            <s.HistorialNav>
                <s.divNav1>
                    <s.HistorialSelect>
                        <option value="" selected>TODOS</option>
                        <option value="">Ubicación</option>
                        <option value="">Apagar Motor</option>
                        <option value="">Restaurar Motor</option>
                        <option value="">Número de SOS</option>
                        <option value="">Check Status</option>
                        <option value="">Parámetros</option>
                        <option value="">GPRS Settings</option>
                        <option value="">Versión</option>
                        <option value="">Reset</option>
                        <option value="">Comandos</option>
                    </s.HistorialSelect>
                    <s.HistorialButton>Búsqueda</s.HistorialButton>
                </s.divNav1>
                <s.duvNav2></s.duvNav2>
            </s.HistorialNav>
        </s.HistorialBody>
    )
}

export default Historial
