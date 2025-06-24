import React, { useState } from 'react'

const ZigZag = () => {
    const [inputVal, setInputVal] = useState('');
    const [result, setResult] = useState('');

    const handleSubmit = () => {
        if(inputVal.length === 0){
            setResult('');
        } else {

            const arr1 = [];
            const arr2 = inputVal.split(',');

            arr2.filter((item, index) => {
                if((index+1) % 2 === 0){
                    arr1.push(item.split('').reverse().join(''));
                } else {
                    arr1.push(item.trim());
                }
            });

            setResult(arr1);
        }
    }

    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>Array to Zigzag String Converter </h2>
                <p className='module-subtitle'>Create a React component that allows users to input multiple comma-separated strings and outputs a zigzag merged string. The component merges the strings such that strings at even indices are appended as is, while strings at odd indices are reversed before appending.</p>
            </div>
            <div className='chips-input-container'>
                <div className='form-group'>
                    <input
                        type="text"
                        className='input_txt_box'
                        placeholder="Enter strings like one,two,three"
                        data-testid="input-box"
                        onChange={(e) => setInputVal(e.currentTarget.value)}
                        value={inputVal}
                    />
                </div>
                <div className='form-group'>
                    <button onClick={handleSubmit} className='btn' data-testid="submit-button">
                        Submit
                    </button>
                </div>
                <p data-testid="output-result">Output: {result}</p>
            </div>
        </div>
    )
}

export default ZigZag
