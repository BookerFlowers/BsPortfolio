import React, { useState } from 'react';



const Certificates = () => {




    return (
        <div className='flex flex-col items-center justify-center  bg-black text-white  sm:gap-8 gap-4 sm:w-screen w-full h-screen overflow-scroll sm:p-1 p-0.1'>
            <div className='text-center flex flex-col items-center'>
                 <h1 className='font-extrabold sm:text-4xl text-2xl'>Accomplishments</h1> 
                 <img className='sm:h-40 sm:w-40 h-20 w-20' src="src\assets\images\55.jpg" alt="cane-corso" />

            </div>
          

            <div className='flex sm:flex-row flex-col gap-5 '>
                <img className='sm:h-40 sm:w-40 h-20 w-20' src="src\assets\images\codecamp.png" alt="codecamp" />
               

                <img className='sm:h-40 sm:w-40 h-20 w-20' src="src\assets\images\buildingwithHTML.png" alt="html" />

            </div>
            <div className='flex sm:flex-row flex-col gap-5 '>

                <img className='sm:h-40 sm:w-40 h-20 w-20' src="src\assets\images\javascriptclasses.png" alt="classes" />
              
                <img className='sm:h-40 sm:w-40 h-20 w-20' src="src\assets\images\javascriptsecondlanguage.png" alt="secondlanguage" />
            </div>
            <div className='flex sm:flex-row flex-col gap-5 '>

                <img className='sm:h-40 sm:w-40 h-20 w-20' src="src\assets\images\javascripttricky.png" alt="jstricky" />
                <img className='sm:h-40 sm:w-40 h-20 w-20' src="src\assets\images\Screenshot 2025-03-10 114117.png" alt="persevere" />

            </div>




        </div>
    );

};

export default Certificates;