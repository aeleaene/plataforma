import React, {createContext, useState} from 'react';

export const MenContext = createContext();

export const MenuContext = ({children}) => {

    const [menuOp, setMenuOp] = useState(1);
    const [submenuOp, setSubmenuOp] = useState(1);
    const [drawClick, setDrawClick] = useState({});
    const [colorValue, setColorValue] = useState("");
    const [latFenceCircle, setLatFenceCircle] = useState(0);
    const [lngFenceCirlce, setLngFenceCirlce] = useState(0);
    const [radiusFence, setRadiusFence] = useState(0)
    const [bounds, setBounds] = useState([]);
    const [distanceLine, setDistanceLine] = useState(false);
    const [areaLine, setAreaLine] = useState(false);
    return (
        <MenContext.Provider value={{ 
            menuOp,
            submenuOp,
            setMenuOp,
            setSubmenuOp,
            drawClick,
            setDrawClick,
            colorValue,
            setColorValue,
            latFenceCircle,
            setLatFenceCircle,
            lngFenceCirlce,
            setLngFenceCirlce,
            bounds,
            setBounds,
            radiusFence,
            setRadiusFence,
            distanceLine,
            setDistanceLine,
            areaLine,
            setAreaLine,
         }}>
            {children}
        </MenContext.Provider>
    )
}

