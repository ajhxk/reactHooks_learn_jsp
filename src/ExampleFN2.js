import React, { useState } from 'react';

function Example2() {
    const [age, setAge] = useState(18);
    const [sex, setSex] = useState('男');
    const [work, setWork] = useState('coder');
    return (
        <div>
            <p>JSPang 今年 {age}岁</p>
            <p>性别：{sex}</p>
            <p>工作：{work}</p>
        </div>
    )
}
 
export default Example2;