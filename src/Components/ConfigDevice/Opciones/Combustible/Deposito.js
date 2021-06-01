import React from 'react'
import * as s from './Combustible.styles';

const Deposito = () => {
    return (
        <s.ContentConsumo>
            <s.InputGroup>
                <s.Label>Forma del Tanque de Combustible</s.Label>
                <s.DivTanque>
                    <s.DivTanqueContent>
                        <s.DivTanqueCheck>
                            <s.Label><s.TanqueCheck type="radio" name="tanque"/>Cubo</s.Label>
                            <s.Label><s.TanqueCheck type="radio" name="tanque"/>Horizontal</s.Label>
                        </s.DivTanqueCheck>
                        <s.InputGroup>
                            <s.SpanInput1>Longitud</s.SpanInput1>
                            <s.TanqueInput type="text" />
                            <s.SpanInput2>cm</s.SpanInput2>
                        </s.InputGroup>
                        <s.InputGroup>
                            <s.SpanInput1>Anchura</s.SpanInput1>
                            <s.TanqueInput type="text" />
                            <s.SpanInput2>cm</s.SpanInput2>
                        </s.InputGroup>
                        <s.InputGroup>
                            <s.SpanInput1>Altura</s.SpanInput1>
                            <s.TanqueInput type="text" />
                            <s.SpanInput2>cm</s.SpanInput2>
                        </s.InputGroup>
                    </s.DivTanqueContent>
                </s.DivTanque>
            </s.InputGroup>
            <s.InputGroup>
                <s.Label>Volumen del Tanque de Combustible</s.Label>
                <s.DivTanque style={{marginLeft: '5'}}>
                    <s.InputCombustible type="number" min="0"/>
                </s.DivTanque>
            </s.InputGroup>
        </s.ContentConsumo>
    )
}

export default Deposito
