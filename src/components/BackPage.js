import React from 'react'
import { useNavigate } from 'react-router-dom'

const BackPage = () => {
    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }
  return (
    <div className='back_btn'>
        <button onClick={goBack} className='goback_btn'></button>
    </div>
  )
}

export default BackPage;
