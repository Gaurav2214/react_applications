import React from 'react';
import { jsInterQuestions } from '../utils/helper';

const JsQuestions = () => {

    const countEachElm = () => {
        const people = [
            { name: "Alice", age: 25 },
            { name: "Bob", age: 30 },
            { name: "Charlie", age: 25 },
            { name: "David", age: 30 },
            { name: "Eve", age: 35 }
        ];
        const countObj = {};
        people.map((item) => {
            if(countObj[item.age]){
                countObj[item.age]++;
            } else {
                countObj[item.age] = 1;
            }
        })

        console.log(countObj);
    }

    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>JavaScript Questions - Machine Coding Interview</h2>
                {countEachElm()}
            </div>
            <div className='question-container'>
                <ul>
                    {jsInterQuestions.map((item, index) => 
                    <li key={index}>
                        <div className='question'>{item.question}</div>
                        <div className='answer'>
                            <pre>
                            {item.answer}
                            </pre>
                        </div>
                    </li>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default JsQuestions;
