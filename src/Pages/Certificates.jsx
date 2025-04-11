import React, { useState } from 'react';
import avitar from '../../public/assets/images/3.png';
import fcc from '../../public/assets/images/codecamp.png';
import markup from '../../public/assets/images/buildingwithHTML.png';
import jsc from '../../public/assets/images/javascriptclasses.png';
import sl from '../../public/assets/images/javascriptsecondlanguage.png';
import jtb from '../../public/assets/images/javascripttricky.png';
import fullstack from '../../public/assets/images/Screenshot 2025-03-10 114117.png';



const Certificates = () => {




    return (
        <div className='flex flex-col items-center justify-center  bg-gradient-to-bl 	
bg-gray-600 	
bg-purple-800 text-white  sm:gap-8 gap-4 sm:w-screen w-screen h-screen overflow-scroll sm:p-1 p-0.1'>
            <div className='text-center flex flex-col items-center'>
                <h1 className='font-extrabold sm:text-4xl text-2xl'>Accomplishments</h1>
                <img className='sm:h-40 sm:w-40 h-20 w-20 rounded-full border-4 border-purple-800' src={avitar} alt="developer" />

            </div>


            <div className='flex sm:flex-row flex-col gap-5 '>
                <img className='sm:h-40 sm:w-40 h-20 w-20 border-4 border-purple-800' src={fcc} alt="codecamp" />


                <img className='sm:h-40 sm:w-40 h-20 w-20 border-4 border-purple-800' src={markup} alt="html" />

            </div>
            <div className='flex sm:flex-row flex-col gap-5 '>

                <img className='sm:h-40 sm:w-40 h-20 w-20 border-4 border-purple-800' src={jsc} alt="classes" />

                <img className='sm:h-40 sm:w-40 h-20 w-20 border-4 border-purple-800' src={sl} alt="secondlanguage" />
            </div>
            <div className='flex sm:flex-row flex-col gap-5 '>

                <img className='sm:h-40 sm:w-40 h-20 w-20 border-4 border-purple-800' src={jtb} alt="jstricky" />
                <img className='sm:h-40 sm:w-40 h-20 w-20 border-4 border-purple-800' src={fullstack} alt="persevere" />

            </div>




        </div>
    );

};

export default Certificates;