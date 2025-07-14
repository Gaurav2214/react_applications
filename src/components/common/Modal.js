import React from 'react'

const Modal = () => {
    return (
        <div className='model-container'>
            <div className="model-container__inner">
                <h2>Add Employee</h2>
                <form >
                    <div class="form-group">
                        <input className="input_txt_box" type="text" value="" />
                        <label>First Name</label>
                    </div>
                    <div class="form-group">
                        <input className="input_txt_box" type="text" value="" />
                        <label>Last Name</label>
                    </div>
                    <div class="form-group">
                        <input className="input_txt_box" type="text" value="" />
                        <label>Email</label>
                    </div>
                    <div class="form-group">
                        <input className="input_txt_box" type="text" value="" />
                        <label>Image</label>
                    </div>
                    <div class="form-group">
                        <input className="input_txt_box" type="text" value="" />
                        <label>Salary</label>
                    </div>
                    <div class="form-group">
                        <input className="input_txt_box" type="text" value="" />
                        <label>DOB</label>
                    </div>
                    <div class="form-group">
                        <input className="input_txt_box" type="text" value="" />
                        <label>Address</label>
                    </div>
                    <button className='btn'>Submit</button>
                    <button className='btn'>Cancel</button>
                </form>
            </div>
        </div>
    )
}

export default Modal;
