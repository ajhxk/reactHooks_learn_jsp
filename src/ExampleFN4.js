// 使用useContent模拟props
import React, { useState, createContext, useContext } from 'react';

const CountCtx = createContext();

function Counter () {
    let count = useContext(CountCtx)
    return (<h2>Counter: {count}</h2>)
}
function Counter2 () {
    let count = useContext(CountCtx)
    return (<h2>Counter2: {count}</h2>)
}

function Example4() {
    const [count, setCount] = useState(0)
    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={() => setCount(count+1)} >点击</button>
            <CountCtx.Provider value={count}>
                <Counter />
                <Counter2 />
            </CountCtx.Provider>
        </div>
    )
}
 
export default Example4;