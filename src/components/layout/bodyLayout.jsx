import React from 'react';

const BodyLayout = ({children, title}) => {
    return (
        <div className='container min-vh-100'>
            <h1 className='bg-info text-center rounded my-2 py-2 shadow'>{title}</h1>
            <div className="border rounded shadow p-2 bg-info-subtle">
                <div className='bg-white'>
                    {children}
                </div>
            </div>
        </div>

    );
};

export default BodyLayout;