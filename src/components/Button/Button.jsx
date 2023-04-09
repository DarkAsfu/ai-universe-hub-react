import React from 'react';

const Button = ({children}) => {
    // console.log(children)
    return (
        <div className='text-center m-4 '>
            <button className='btn btn-error text-white'>{children}</button>
        </div>
    );
};

export default Button;