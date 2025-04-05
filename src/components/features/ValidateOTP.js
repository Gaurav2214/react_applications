import React, { useEffect, useRef, useState } from 'react'

const OTP_DIGITS_COUNT = 5;
const ValidateOTP = () => {
  
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGITS_COUNT).fill('')); 
  const refArr = useRef([]);

  const handleOnChange = (value, index) => {
    if(isNaN(value)) return;
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);

    newValue && refArr.current[index+1]?.focus();
  }

  const handleOnKeyDown = (e, index) => {
    if(!e?.target?.value && e?.key === "Backspace"){
      refArr.current[index - 1]?.focus();
    }
  }

  useEffect(() => {
    refArr.current[0]?.focus();
  }, []);

  return (
    <div className='container'>
        <div className='module-head'>
          <h2 className='module-title'>Validate OTP - Machine Coding Interview </h2>
        </div>
        <div className='form-group otp_box'>
          {inputArr.map((item, index) => 
            <input 
              key={index} 
              type='text' 
              value={inputArr[index]} 
              ref={input => refArr.current[index] = input}
              onChange={(e) => handleOnChange(e.target.value, index)}
              onKeyDown={(e) => handleOnKeyDown(e, index)}
            />
          )}
        </div>
    </div>
  )
}

export default ValidateOTP;
