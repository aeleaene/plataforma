import React from 'react'
import * as s from './Preferencias.styles';
/* import './Switch.css'; */

const Preferencias = () => {
    return (
        <s.Contenedor>
            <s.ContentTwo>
                <s.InputGroup>
                    <s.Label>Métricas de Distancia:</s.Label>
                        <s.Input>
                            <option value="">Kilómtro</option>
                            <option value="">Milla</option>
                        </s.Input>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Métricas de presión:</s.Label>
                        <s.Input>
                            <option value="">Libras por pulgada cuadrada(Psi)</option>
                            <option value="">Bar(Bar)</option>
                            <option value="">KiloPascals(Kpa)</option>
                        </s.Input>
                </s.InputGroup>
            </s.ContentTwo>

            <s.ContentTwo>
                <s.InputGroup>
                    <s.Label>Métricas de temperatura:</s.Label>
                        <s.Input>
                            <option value="">Celsius(℃)</option>
                            <option value="">Fahrenheit(℉)</option>
                        </s.Input>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Métricas de volumen:</s.Label>
                        <s.Input>
                            <option value="">Litros(L)</option>
                            <option value="">Galones (EE. UU.)</option>
                            <option value="">Galones (Reino Unido)</option>
                        </s.Input>
                </s.InputGroup>
            </s.ContentTwo>

            <s.ContentOne>
                <s.ContentOneInside>
                    <s.InputGroup>
                        <s.Label>Métricas de eficiencia de combustible:</s.Label>
                        <s.Input>
                            <option value="">L/100KM</option>
                            <option value="">Millas / galón (EE. UU.)</option>
                            <option value="">Millas / galón (Reino Unido)</option>
                        </s.Input>
                    </s.InputGroup>
                </s.ContentOneInside>
            </s.ContentOne>
            <s.hr></s.hr>
            <s.ContentTwo>
                <s.InputGroup>
                    <s.Label>Zona horaria:</s.Label>
                        <s.Input>
                            <option value="">UTC-05:00</option>
                        </s.Input>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Primer día de la semana:</s.Label>
                        <s.Input>
                            <option value="">Lunes</option>
                            <option value="">Domingo</option>
                        </s.Input>
                </s.InputGroup>
            </s.ContentTwo>
            <s.hr></s.hr>
            <s.ContentTwo>
                <s.InputGroup>
                    <s.Label>Ralentí Mínimo:</s.Label>
                    <s.SwitchBtn className="switchBtn">
                        <s.Switch1 type="checkbox" name="check1" id="check1"/>
         {/*                <s.SwitchRound className="slide round"></s.SwitchRound> */}
                    </s.SwitchBtn>
                </s.InputGroup>
                <s.InputGroup>
                    <s.Label>Contraseña CMD:</s.Label>
                    <s.SwitchBtn className="switchBtn">
                        <s.Switch2 type="checkbox" name="check2" id="check2"/>
                       {/*  <s.SwitchRound className="slide round"></s.SwitchRound> */}
                    </s.SwitchBtn>
                </s.InputGroup>
            </s.ContentTwo>
            <s.ContentOne>
                <s.ContentOneInside>
                    <s.InputGroup>
                        <s.Label>Habilitar el inicio de sesión de IMEI:</s.Label>
                            <s.SwitchBtn className="switchBtn">
                                <s.Switch3 type="checkbox"name="check3" id="check3"/>
                                {/* <s.SwitchRound className="slide round"></s.SwitchRound> */}
                            </s.SwitchBtn>
                    </s.InputGroup>
                </s.ContentOneInside>
            </s.ContentOne>
        </s.Contenedor>
    )
}

export default Preferencias
