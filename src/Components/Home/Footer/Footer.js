import React from 'react';

const Footer = () => {
    const date = new Date().getFullYear()
    console.log(date);
    return (
        <div className='text-center	'>
            <h3 className='font-bold'>Copyright &copy;{date}</h3>
        </div>
    );
};

export default Footer;