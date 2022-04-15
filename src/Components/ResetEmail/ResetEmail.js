import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import auth from '../../Firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ResetEmail = () => {
    const [sendPasswordResetEmail, sending, error]=useSendPasswordResetEmail(auth)
    const handlesubmit = e => {
        e.preventDefault()
    const email = e.target.email.value
    sendPasswordResetEmail(email)
    }
   

    return (
        <div>
            <form onSubmit={handlesubmit} className='w-1/2 mx-auto'>
              {error ?  toast(error.message): ''}
              {sending ?  toast('sent'): ''}
                <input type="email" placeholder='Enter Your Email' className='block mt-5 border-2 w-full border-blue-300 rounded-lg p-2' name='email' />
                <input type="submit" className='border-2 bg-pink-600 rounded-md p-2 mt-10 font-bold text-white' value="Send Email" />
            </form>
            <ToastContainer />
       </div>
    );
};

export default ResetEmail;