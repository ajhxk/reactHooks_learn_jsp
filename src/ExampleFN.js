// 使用useEffect 模拟生命周期
import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

function Index () {
    useEffect(() => { console.log('useEffect 模拟 componentDidUpdate Index 更新了') });
    useEffect(() => {
        console.log('useEffect 模拟 componentDidMonut Index 来了');
        return (() => {
            console.log('useEffect 模拟 componentWillUnmount Index 走了');
        })
    }, []);
    return (<h2>JSPang.com</h2>)
}

function List () {
    useEffect(() => {
        // console.log('useEffect => List 来了')
        return (() => {
            // console.log('useEffect => List 走了');
        })
    });
    return (<h2>List page</h2>)
}

function Example() {
    const [count, setCount] = useState(0)
    useEffect(() => {
        console.log(`useEffect => you clicked ${count} times`);
        return (() => {
            console.log('=========================')
        })
    }, [count]);
    return (
        <div>
            <p>You clicked { count } times</p>
            <button onClick={() => setCount(count+1)} >点击</button>

            <Router>
                <ul>
                    <li><Link to='/'>首页</Link></li>
                    <li><Link to='/list/'>列表</Link></li>
                </ul>
                <Route path='/' exact component={Index} />
                <Route path='/list/' exact component={List} />
            </Router>
        </div>
    )
}
 
export default Example;