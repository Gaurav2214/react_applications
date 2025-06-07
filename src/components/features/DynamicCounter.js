import React, { useEffect, useRef, useState } from 'react'

const DynamicCounter = () => {

    const [count, setCount] = useState(0);
    const [countOrder, setCountOrder] = useState(null);
    const timerRef = useRef(null);

    const handleStart = () => {
        setCountOrder(true);
    }

    const handleDecrement = () => {
        setCountOrder(false);
    }

    const handlePause = () => {
        clearTimeout(timerRef.current);
    }

    const handleReset = () => {
        setCount(0);
        setCountOrder(null);
        clearTimeout(timerRef.current);
    }

    useEffect(() => {
        if(countOrder !== null){
            timerRef.current = setTimeout(() => {
                setCount(prev => countOrder ? prev + 1 : prev - 1);
            }, 800);
        }
        return () => clearTimeout(timerRef.current);
    }, [count, countOrder]);

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
                    <button className='btn' onClick={handleDecrement}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default DynamicCounter
