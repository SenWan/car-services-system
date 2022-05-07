import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'


const Register = () => {
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');

    }

    const handleRegister = event => {
        event.preventDefault();

        /* access data from register form */
        /* const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value; */
    }
    return (
        <div className='container register-form'>
            <h2 className='text-center mt-3'>Please Register</h2>
            <form onSubmit={handleRegister}>
                <input type="text" name="name" id="" placeholder='Your Name' required />
                <input type="email" name="email" id="" placeholder='Email Address' required />
                <input type="password" name="password" id="" placeholder='Password' required />
                <input className='form-submit' type="submit" value="Register" />
            </form>
            <p>Already have an account? <span  style={{cursor:'pointer'}} className='text-danger' onClick={navigateLogin}> Please Login !</span></p>
        </div>
    );
};

export default Register;