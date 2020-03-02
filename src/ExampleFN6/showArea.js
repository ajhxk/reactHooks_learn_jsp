import React, { useContext } from 'react';
import {ColorCtx} from './color'

function ShowArea () {
    const {color} = useContext(ColorCtx)
    return (
    <div style={{color}}>字体颜色{color}</div>
    )
}

export default ShowArea