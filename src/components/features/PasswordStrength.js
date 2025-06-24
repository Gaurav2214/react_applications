import React, { useState } from 'react'

const PasswordStrength = () => {
    const [value, setValue] = useState('');
    const [result, setResult] = useState('');

    const handlePassword = () => {
        if(value.length < 8){
            setResult('Weak Password');
        } else if(value.length >= 8){
            if(/[a-zA-Z]/.test(value)){
                if(/[!@#$%^&*(),.?":{}|<>]/.test(value)){
                    setResult('Level 3');
                } else {
                    setResult('Level 2');
                }
            } else {
                setResult('Level 1');
            }
        }
    }

  return (
    <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>Password Strength Checker </h2>
                <p className='module-subtitle'>Build a password strength checker in React that evaluates and displays the strength level of a user's password.
                </p>
            </div>
            <div className='chips-input-container'>
                <div className='form-group'>
                    <input
                        type="text"
                        className='input_txt_box'
                        placeholder="Enter Password"
                        onChange={(e) => setValue(e.currentTarget.value)}
                        value={value}
                    />
                </div>
                <div className='form-group'>
                    <button onClick={handlePassword} className='btn' data-testid="submit-button">
                        Submit
                    </button>
                </div>
                <p data-testid="output-result">Strength: {result}</p>
            </div>
        </div>
  )
}

export default PasswordStrength;
