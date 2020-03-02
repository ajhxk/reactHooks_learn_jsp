import React, {useContext} from 'react';
import {ColorCtx, UPDATE_COLOR} from './color'

const toColor = (dispatch, color) => dispatch({type: UPDATE_COLOR, color})

const toRed = (dispatch) => toColor(dispatch, 'red')
const toYellow = (dispatch) => toColor(dispatch, 'yellow')

function Buttons () {
    const {dispatch} = useContext(ColorCtx)
    return (
        <div>
            <button onClick={() => toRed(dispatch)}>红色</button>
            <button onClick={() => toYellow(dispatch)}>黄色</button>
        </div>
    )
}

export default Buttons;