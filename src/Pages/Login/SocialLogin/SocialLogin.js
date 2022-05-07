import React from 'react';
import google from '../../../../src/images/social/google.png';
import facebook from '../../../../src/images/social/facebook.png';
import github from '../../../../src/images/social/github.png';
import auth from '../../../firebase.init';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
;
    if (error) {
        errorElement = (
          <div>
            <p className='text-danger'>Error: {error.message}</p>
          </div>
        );
      }

      if(user){
        navigate('/home');
      }
    return (
        <div>
            <div className='d-flex align-items-center gap-2'>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
                <p className='mt-2'>or</p>
                <div style={{height: '1px'}} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <button onClick={() => signInWithGoogle()} className='btn btn-info w-50 d-block mx-auto my-2'>
                <img src={google} alt="" />
                <span className='px-2'>Google Sign In</span></button>
            <button className='btn btn-info w-50 d-block mx-auto my-2'>
                <img src={facebook} alt="" />
                <span className='px-2'>Facebook Sign In</span></button>
            <button className='btn btn-info w-50 d-block mx-auto'>
                <img src={github} alt="" />
                <span className='px-2'>Github Sign In</span></button>
        </div>
    );
};

export default SocialLogin;