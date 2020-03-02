// useRef
import React, { useState, useEffect, useCallback } from 'react';

function useWinSize () {
    const [size, setSize] = useState({
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight,
    });

    const onResize = useCallback(() => {
        setSize({
            width: document.documentElement.clientWidth,
            height: document.documentElement.clientHeight,
        })
    }, [])

    useEffect(() => {
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return size;
}

function Example9 () {
    
    const size = useWinSize();

    return (
        <>
            <div>页面size:{size.width}x{size.height}</div>
        </>
    )
}

export default Example9