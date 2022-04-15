import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../Firebase.init';

const SingIn = () => {

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth)


    const location = useLocation()
    const navigate = useNavigate()
    const from =location?.state?.from?.pathname || '/'
    const handlesubmit = e => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        signInWithEmailAndPassword(email, password)

    }
    if (user) {
        navigate(from , {replace: true})
    }

    
    return (
        <div>
            <div className='flex justify-around mt-10'>
                <img className='w-2/4 h-[500px]' src="https://media.istockphoto.com/vectors/isometric-illustration-with-a-laptop-men-and-women-working-on-web-vector-id1096969570?k=20&m=1096969570&s=612x612&w=0&h=tjjNz68OHe8Oor_pknW2ZsKfKz-FUy3tQD-B-vYq8hg=" alt="" />
                <form onSubmit={handlesubmit} className='border-2 p-10 h-80 bg-slate-400 rounded-xl shadow-2xl'>
                    <h1 className='text-xl text-white font-bold'>{loading ? 'Loadding........' : ''}</h1>
                    <h1 className='text-xl text-white font-bold'>{error ? error.message : ''}</h1>
                    <input type="email" placeholder='Enter Your Email' className='block mt-5 border-2 w-full border-blue-300 rounded-lg p-2 ' name='email' />
                    <input type="password" name="password" id="" placeholder='****************' className='block mt-5 border-2 w-full border-blue-300 rounded-lg p-2' />
                    <input type="submit" value="Sing IN" className='block border-2 bg-blue-400 rounded-sm text-black font-bold p-2 mt-5' />
                    <Link className='font-bold m-5 focus:text-red-500 font-mono pt-5' to='/resetemail'>Reset password</Link>
                </form>
            </div>
        </div>
    );
};

export default SingIn;