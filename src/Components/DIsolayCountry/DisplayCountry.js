import React from 'react';

const DisplayCountry = (props) => {
    console.log(props.country.flags.png)

    return (
        <div className='border-2 '>
           <div>
               <img src={props.country.flags.png} alt="" />
           </div>
        </div>
    );
};

export default DisplayCountry;