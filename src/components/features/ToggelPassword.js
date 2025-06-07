import { Eye, EyeOff } from 'lucide-react';
import React, { useState } from 'react'

const ToggelPassword = () => {
    const [showPass, setShowPass] = useState(false);
    const handledPass = () =>{
        setShowPass(prev => !prev);
    }
    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>Toggel Password </h2>
            </div>
            <div className="form-group">
                <input
                    type={showPass ? 'text' : 'password'}
                    id="password"
                    placeholder="Enter password"
                    className='input_txt_box'
                    data-testid="password-input"
                />
                <span
                    className="icon"
                    data-testid="toggle-icon"
                >
                    {!showPass ? (
                        <EyeOff size={18} onClick={handledPass} />
                    ) : (
                        <Eye size={18} onClick={handledPass} />
                    )}
                </span>
            </div>

            <span className="visibility-label" data-testid="visibility-label">
                {!showPass ? 'Password Hidden' : 'Password Visible'}
            </span>
        </div>
    )
}

export default ToggelPassword;
