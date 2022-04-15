import React from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const SingUp = () => {
    const navigate = useNavigate()
    const [createUserWithEmailAndPassword, user, loading, error] = useCreateUserWithEmailAndPassword(auth)

    const handlesubmit = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value
        createUserWithEmailAndPassword(email, password)
    }
    if (user) {
        navigate('/')
    }

    return (
        <div className='md:flex justify-around mt-10'>
            <img src="https://cdna.artstation.com/p/assets/images/images/027/682/158/original/liz-gross-signup.gif?1592246526&dl=1" alt="" />
            <form onSubmit={handlesubmit} className='border-2 p-10 h-96 bg-slate-300 rounded-xl shadow-2xl'>
                <h1 className='text-xl text-white'>{loading ?  'loadding.........' : '' }</h1>
                <h1 className='text-xl text-red-700'>{error ? error.message : ''}</h1>
                <input type="text" placeholder='userName' className='block mt-5 border-2 border-blue-300 w-full rounded-lg p-2' name='username' />
                <input type="email" placeholder='Enter Your Email' className='block mt-5 border-2 w-full border-blue-300 rounded-lg p-2' name='email' />
                <input type="password" id="" placeholder='****************' className='block mt-5 border-2 w-full border-blue-300 rounded-lg p-2' name='password' />
                <input type="submit" value="Sing Up" className='block border-2 bg-blue-400 rounded-sm text-black font-bold p-2 mt-5' />
            </form>
            
        </div>
    );
};

export default SingUp;