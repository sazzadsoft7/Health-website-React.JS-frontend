import React from 'react';
import {useNavigate} from "react-router-dom";

const BodyLayout = ({children, title}) => {

    const navigate = useNavigate(); // Initialize navigate

    // Back Button Function
    const goBack = () => {
        navigate(-1); // Navigate to the previous page
    };


    return (
        <div className='container min-vh-100'>
            <h1 className='bg-info text-center rounded my-2 py-2 shadow'>
                <button className={'btn btn-success m-2 float-start'} onClick={goBack}>
                <i class = 'bi bi-arrow-left'/>
                    Back
                </button>
                {title}
            </h1>
            <div className="border rounded shadow p-2 bg-info-subtle">
                <div className='bg-white'>
                    {children}
                </div>
            </div>
        </div>

    );
};

export default BodyLayout;