import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';
import { async } from '@firebase/util';


const Register = () => {
    const [agree, setAgree] = useState(false);
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth, {sendEmailVerification: true});

      const [updateProfile, updating] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');

    }

    /* if(user){
        navigate('/home')
    }
 */
    const handleRegister = async event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        /* const agree = event.target.terms.checked; */
        /* if(agree){
            createUserWithEmailAndPassword(email, password);
        } */
       await createUserWithEmailAndPassword(email, password);
       await updateProfile({ displayName : name });
          navigate('/home')
    } 
    return (
        <div className='container register-form'>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input onClick={() => setAgree(!agree)} type="checkbox" name="terms" id="terms" />
                <label className={agree ? 'ps-2 text-primary' : 'ps-2 text-danger'} htmlFor="terms">Accept Terms an Condition</label>
                <input disabled={!agree} className='w-50 mx-auto btn my btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <span  style={{cursor:'pointer'}} className='text-primary' onClick={navigateLogin}> Please Login !</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;