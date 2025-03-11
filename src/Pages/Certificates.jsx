import React, { useState } from 'react';



const Certificates = () => {




    return (
        <div className='flex flex-col items-center justify-center  bg-black text-white  gap-8 w-screen h-screen p-1'>
            <div>
                 <h1 className='font-extrabold'>Accomplishments</h1> 
                 <img className='h-40 w-40' src="src\assets\images\bookerssuccess.png" alt="success" />

            </div>
          

            <div className='flex sm:flex-row flex-col gap-5 '>
                <img className='h-40 w-40' src="src\assets\images\codecamp.png" alt="codecamp" />
               

                <img className='h-40 w-40' src="src\assets\images\buildingwithHTML.png" alt="html" />

            </div>
            <div className='flex sm:flex-row flex-col gap-5 '>

                <img className='h-40 w-40' src="src\assets\images\javascriptclasses.png" alt="classes" />
              
                <img className='h-40 w-40' src="src\assets\images\javascriptsecondlanguage.png" alt="secondlanguage" />
            </div>
            <div className='flex sm:flex-row flex-col gap-5 '>

                <img className='h-40 w-40' src="src\assets\images\javascripttricky.png" alt="jstricky" />
                <img className='h-40 w-40' src="src\assets\images\Screenshot 2025-03-10 114117.png" alt="persevere" />

            </div>




        </div>
    );

};

export default Certificates;