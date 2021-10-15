import React from 'react'
import * as s from './Combustible.styles';

const Consumo = () => {
    return (
        <s.ContentConsumo>
            <s.InputGroup>
                <s.Label>Consumo de Combustible</s.Label>
                <s.Input type="number" min="0" step="0.5" placeholder="L/100KM"/>
            </s.InputGroup>
        </s.ContentConsumo>
    )
}

export default Consumo
