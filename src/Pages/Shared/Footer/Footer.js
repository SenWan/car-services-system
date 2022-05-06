import React from 'react';

const Footer = () => {
    return (
        <footer className='text-center mt-5 text-white bg-primary p-2'>
            <p><small> Copyright © {new Date().getFullYear()}</small></p>
            <p>senwan96@gmail.com</p>
        </footer>
    );
};

export default Footer;