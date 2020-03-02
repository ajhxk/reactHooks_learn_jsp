// 使用 useReducer，useContext 模拟redux
import React from 'react';
import ShowArea from './showArea';
import Buttons from './Buttons';
import { Color } from './color'


function Example6 () {
    return (
        <div>
            <Color>
                <ShowArea />
                <Buttons />
            </Color>
        </div>
    )
}

export default Example6;
