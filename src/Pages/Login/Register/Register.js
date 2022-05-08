import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import './Register.css'
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');

    }

    if(user){
        navigate('/home')
    }

    const handleRegister = event => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        createUserWithEmailAndPassword(email, password)
    }
    return (
        <div className='container register-form'>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Terms an Condition</label>
                <input className='w-50 mx-auto btn my btn-primary mt-2' type="submit" value="Register" />
            </form>
            <p className='text-center'>Already have an account? <span  style={{cursor:'pointer'}} className='text-primary' onClick={navigateLogin}> Please Login !</span></p>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Register;