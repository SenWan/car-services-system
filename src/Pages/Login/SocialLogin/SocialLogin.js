import React from 'react';
import google from '../../../../src/images/social/google.png';
import facebook from '../../../../src/images/social/facebook.png';
import github from '../../../../src/images/social/github.png';
import auth from '../../../firebase.init';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);

    const navigate = useNavigate();
    let errorElement;
;
    if (error || error1) {
        errorElement = (
            <p className='text-danger'>Error: {error?.message} {error1.message}</p>
        );
      }

      if(user || user1){
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
            <button onClick={() => signInWithGithub()} className='btn btn-info w-50 d-block mx-auto'>
                <img src={github} alt="" />
                <span className='px-2'>Github Sign In</span></button>
        </div>
    );
};

export default SocialLogin;