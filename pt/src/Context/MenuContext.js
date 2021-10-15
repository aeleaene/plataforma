import React, {createContext, useState} from 'react';

export const MenContext = createContext();

export const MenuContext = ({children}) => {

    const [menuOp, setMenuOp] = useState(1);
    const [submenuOp, setSubmenuOp] = useState(1)
    return (
        <MenContext.Provider value={{ 
            menuOp,
            submenuOp,
            setMenuOp,
            setSubmenuOp,
         }}>
            {children}
        </MenContext.Provider>
    )
}

