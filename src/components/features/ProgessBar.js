import React, { useEffect, useState } from 'react'

const ProgressContainer = ({ progress }) => {
    const [animateProgress, setAnimateProgress] = useState(0);

    useEffect(() => {
        setTimeout(() => { setAnimateProgress(progress) }, 200);
    }, [animateProgress]);

    return (
        <div className='progress-bar'>
            <div className='item'
                style={{
                    transform: `translateX(${animateProgress - 100}%)`
                }}>
            </div>
            <div className='text' style={{ color: `${animateProgress > 5 ? '#fff' : '#000'}` }}>
                {animateProgress}%
            </div>
        </div>
    )
}

const ProgessBar = () => {
    const progressVal = [0, 10, 20, 40, 70, 80];
    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>Progress Bar - Machine Coding Interview </h2>
            </div>
            <div className='progress-container'>
                {progressVal.map(value => <ProgressContainer key={value} progress={value} />)}
            </div>
        </div>
    )
}

export default ProgessBar;
