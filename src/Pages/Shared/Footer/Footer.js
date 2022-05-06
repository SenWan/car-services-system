import React from 'react';

const Footer = () => {
    return (

        <div className='text-center mt-5 text-white bg-primary p-2'>
            <p><small> Copyright © {new Date().getFullYear()}</small></p>
            <p>senwan96@gmail.com</p>
        </div>
    );
};

export default Footer;