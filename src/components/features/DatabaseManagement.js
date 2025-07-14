import React, { useEffect, useState } from 'react';
import { employeeData } from '../utils/helper';
import Modal from '../common/Modal';


const DatabaseManagement = () => {
    const [employee, setEmployee] = useState(employeeData);
    const [norecord, setNorecord] = useState('');
    const [showDetail, setShowDetail] = useState({});
    const [addEmp, setAddEmp] = useState(false);

    useEffect(() => {

        employee && employee.filter((item, index) => {
            if (index === 0) {
                setShowDetail(item);
            }
        })
        if(employee.length === 0){
            setShowDetail('');
            setNorecord('No employee in the record');
        }
    }, [employee]);

    const handledDetails = (id) => {
        employee.filter((item) => {
            if (item?.id === id) {
                setShowDetail(item);
            }
        })
    }
    const removeRecord = (id) => {
        setEmployee(prev => prev.filter((item) => item?.id !== id));
    }

    const addEmployee = () => {
        setAddEmp(true);
    }


    return (
        <div className='container'>
            <div className='module-head'>
                <h2 className='module-title'>Employee Database Management </h2>
                <button className='btn' onClick={addEmployee}>Add Employee</button>
            </div>
           
            <div className='section-employee'>
                <div className='section-employee__left'>
                    <ul>
                        {employee && employee.map((item) =>
                            <li key={item?.id} >
                                <p onClick={() => handledDetails(item?.id)}>{item.firstName + ' ' + item?.lastName}</p> 
                                <span onClick={() => removeRecord(item?.id)}>X</span>
                            </li>
                        )}
                    </ul>
                </div>
                <div className='section-employee__right'>

                    {showDetail &&
                        <div className=''>
                            <img src={showDetail?.image} />
                            <p>{showDetail?.firstName} {showDetail?.lastName}</p>
                            <p>{showDetail?.email} </p>
                            <p>{showDetail?.dob} </p>
                            <p>{showDetail?.salary} </p>
                            <p>{showDetail?.address} </p>
                        </div>
                    }
                    {norecord && 
                        <div className=''>
                            <p>{norecord}</p>
                        </div>
                    }

                </div>
            </div>
            {addEmp && <Modal />}
        </div>
    )
}

export default DatabaseManagement;
