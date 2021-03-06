// useMemo解决性能问题 shouldComponentUpdate
import React, { useState, useMemo } from 'react';

function Example7 () {
    const [xiaohong, setXiaohong] = useState('小红在待客状态')
    const [zhiling, setZhiling] = useState('志玲在待客状态')

    return (
        <>
            <button onClick={() =>{setXiaohong(new Date().getTime())}}>小红</button>
            <button onClick={() =>{setZhiling(new Date().getTime()+'志玲')}}>志玲</button>
            <ChildComp name={xiaohong}>{zhiling}</ChildComp>
        </>
    )
}

function ChildComp ({name, children}) {

    function changeXiaohong(name) {
        console.log('小红来了')
        return name + ', 向我们走来了'
    }

    const actionXiaohong = useMemo(() => changeXiaohong(name), [name]) 

    return (
        <>
            <div>{actionXiaohong}</div>
            <div>{children}</div>
        </>
    )
}

export default Example7