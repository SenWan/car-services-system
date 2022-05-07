import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center gap-2'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            <button className='btn btn-primary w-50'>Google Sign In</button>
        </div>
    );
};

export default SocialLogin;