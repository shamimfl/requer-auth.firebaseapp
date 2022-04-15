import React from 'react';
import { useNavigate } from 'react-router-dom';

const Country = () => {
    const navigate =useNavigate()

    const handlecountry=()=>{
        navigate('/allcountry')
    }
    return (
        <div className='mx-auto'>
            <button onClick={handlecountry} className='bg-pink-500 text-white font-bold p-2 rounded-md mt-10 font-mono'>See All Country</button>
        <h1>This is country</h1>
        </div>
    );
};

export default Country;