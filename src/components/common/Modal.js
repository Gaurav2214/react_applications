import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

const Modal = ({onClose, onSubmit}) => {
    const id = uuidv4();
    const [formData, setFormData] = useState({
        id: id,
        firstName: '',
        lastName: '',
        email: '',
        image: '',
        salary: '',
        dob: '',
        address: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev, [name]: value
        }));

        if (e.currentTarget.value !== '') {
            e.currentTarget.classList.add('valid');
        } else {
            e.currentTarget.classList.remove('valid');
        }

    }
    const handledClose = () => {
        onClose(false);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(formData);
    }

    return (
        <div className='model-container'>
            <div className="model-container__inner">
                <h2>Add Employee</h2>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input className="input_txt_box" name='firstName' type="text" value={formData.firstName} onChange={handleChange} />
                        <label>First Name</label>
                    </div>
                    <div className="form-group">
                        <input className="input_txt_box" name='lastName' type="text" value={formData.lastName} onChange={handleChange} />
                        <label>Last Name</label>
                    </div>
                    <div className="form-group">
                        <input className="input_txt_box" name='email' type="text" value={formData.email} onChange={handleChange} />
                        <label>Email</label>
                    </div>
                    <div className="form-group">
                        <input className="input_txt_box" name='image' type="text" value={formData.image} onChange={handleChange} />
                        <label>Image</label>
                    </div>
                    <div className="form-group">
                        <input className="input_txt_box" name='salary' type="text" value={formData.salary} onChange={handleChange} />
                        <label>Salary</label>
                    </div>
                    <div className="form-group">
                        <input className="input_txt_box" name='dob' type="text" value={formData.dob} onChange={handleChange} />
                        <label>DOB</label>
                    </div>
                    <div className="form-group">
                        <input className="input_txt_box" name='address' type="text" value={formData.address} onChange={handleChange} />
                        <label>Address</label>
                    </div>
                    <div className='form-controls'>
                        <button type='submit' className='btn'>Submit</button>
                        <button className='btn' type='button' onClick={handledClose} >Cancel</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Modal;
