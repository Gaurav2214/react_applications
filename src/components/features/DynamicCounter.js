import React, { useEffect, useState } from 'react'

const DynamicCounter = () => {

    const [count, setCount] = useState(0);
    let timer;

    const handleStart = () => {
        setCount(count + 1);
    }

    const handlePause = () => {
        clearTimeout(timer);
    }

    const handleReset = () => {
        setCount(0);
        clearTimeout(timer);
    }

    useEffect(() => {
        if (count) {
            timer = setTimeout(handleStart, 800);
        }
    }, [count]);

    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>Dynamic Counter </h2>
            </div>
            <div className='counter'>
                <h4>Lets Start the Counter</h4>
                <h5 className='count'>{count}</h5>
                <div className='controls'>
                    <button className='btn' onClick={handleStart}>Start</button>
                    <button className='btn' onClick={handlePause}>Pause</button>
                    <button className='btn' onClick={handleReset}>Reset</button>
                </div>
            </div>
        </div>
    )
}

export default DynamicCounter
