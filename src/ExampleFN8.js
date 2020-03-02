// useRef
import React, { useRef, useState, useEffect } from 'react';

function Example8 () {
    
    const inputEl = useRef(null);
    const onButtonCLick = () => {
        inputEl.current.value = 'Hello,JSPang'
        console.log(inputEl)
    }
    const [text, setText] = useState('jspang')
    const [text2, setText2] = useState('jspang2')
    const textRef = useRef();

    useEffect(() => {
        textRef.current = text;
        console.log('textRef.current: ', textRef.current)
    }, [text])

    return (
        <>
            <input ref={inputEl} type='text'/>
            <button onClick={onButtonCLick}>在input上展示文字</button>
            <br/>
            <br/>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <input value={text2} onChange={(e) => setText2(e.target.value)} />
        </>
    )
}

export default Example8