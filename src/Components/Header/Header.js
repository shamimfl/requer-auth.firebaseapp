import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth'
import { Link } from 'react-router-dom';
import auth from '../../Firebase.init';

const Header = () => {
    const [user] =useAuthState(auth)
    console.log(user)
    const  handlesingout =()=>{
        signOut(auth)
    }
  
    return (
        <div className='bg-slate-300 p-5'>
            <Link className='font-bold m-5 focus:text-red-500 font-mono pt-5' to='/'>Home</Link>
            <Link className='font-bold m-5 focus:text-red-500 font-mono pt-5' to='/about'>About</Link>
            <Link className='font-bold m-5 focus:text-red-500 font-mono pt-5' to='/country'>Country</Link>
            <Link className='font-bold m-5 focus:text-red-500 font-mono pt-5' to='/singup'>sing Up</Link>
            {
                user ? <Link onClick={handlesingout} className='font-bold m-5 focus:text-red-500 font-mono pt-5' to='/'>sing Out</Link>  : <Link className='font-bold m-5 focus:text-red-500 font-mono pt-5' to='/singin'>sing In</Link> 
            }
            
        </div>
    );
};

export default Header;