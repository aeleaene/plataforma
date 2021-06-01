import React from 'react'
import * as s from './Combustible.styles';

import { FiPlus } from "react-icons/fi";
import { FiMonitor } from "react-icons/fi";

const Sensor = () => {
    return (
        <s.ContentConsumo>
            <s.BodySensor>
                <s.Cont1Sensor>
                    <s.InputGroup2>
                        <s.Label>entrada</s.Label>
                        <s.SelectSensor>
                            <option value="">Entrada Analógica 1</option>
                            <option value="">Entrada Analógica 2</option>
                        </s.SelectSensor>
                    </s.InputGroup2>
                </s.Cont1Sensor>
                <s.Cont2Sensor>
                    <s.TablaSensor>
                        <s.THead>
                            <s.Th>Valor del Sensor</s.Th>
                            <s.Th>Valor(L)</s.Th>
                        </s.THead>
                        <s.TBody>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                            <s.Tr>
                                <s.Td><s.InputTable /></s.Td>
                                <s.Td><s.InputTable /></s.Td>
                            </s.Tr>
                        </s.TBody>
                    </s.TablaSensor>
                    <s.AddButton><FiPlus /></s.AddButton>
                    <s.MonitorButton><FiMonitor/></s.MonitorButton>
                </s.Cont2Sensor>
            </s.BodySensor>
        </s.ContentConsumo>
    )
}

export default Sensor
