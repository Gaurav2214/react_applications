import React, { useState } from 'react';
import { jsInterQuestions } from '../utils/helper';

const JsQuestions = () => {
    const [active, setActive] = useState();

    const handleAccord = (index) => {
        setActive(active === index ? null : index);
    }

    function findMinNumber() {
        const arr = [3,7,2,9,34];
        if (arr.length === 0) return null;
        let min = arr[0];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }

    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>JavaScript Questions - Machine Coding Interview</h2>
                {/* {findMinNumber()} */}
            </div>
            <div className='question-container'>
                <ul>
                    {jsInterQuestions.map((item, index) => 
                    <li key={index} onClick={() => handleAccord(index)}>
                        <div className='question'>{item.question}</div>
                        {active === index && (
                            <div className='answer'>
                                <pre>
                                {item.answer}
                                </pre>
                            </div>
                        )}
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default JsQuestions;
