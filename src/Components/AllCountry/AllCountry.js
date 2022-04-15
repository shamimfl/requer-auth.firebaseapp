
import React, { useEffect, useState } from 'react';
import DisplayCountry from '../DIsolayCountry/DisplayCountry';

const AllCountry = () => {
    const [country, setCountry] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res=>res.json())
        .then(data=> setCountry(data))
        }, [])
    return (
        <div className='md:grid grid-cols-3 gap-6'>
            {
              country.map(country => <DisplayCountry country={country}></DisplayCountry>)
            }
        </div>
    );
};

export default AllCountry;