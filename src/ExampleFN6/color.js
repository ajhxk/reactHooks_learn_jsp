import React, { createContext, useReducer } from 'react';

export const ColorCtx = createContext();

export const UPDATE_COLOR = 'UPDATE_COLOR';

const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_COLOR:
            return action.color;
        default:
            return state
    }
}

export const Color = (props) => {
    const [color, dispatch] = useReducer(reducer, 'red')

    return (
        <ColorCtx.Provider value={{color, dispatch}}>
            {props.children}
        </ColorCtx.Provider>
    ) 
}