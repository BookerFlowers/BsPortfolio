import React from 'react';
import avitar from '../../public/assets/images/3.png';
import clock1 from '../../public/assets/images/digitalclock.png';
import clock2 from '../../public/assets/images/digitalclock2.png';
import todo2 from '../../public/assets/images/firstto-do-apptwo.png';
import todo1 from '../../public/assets/images/firstto-do0app.png';
import cardgm from '../../public/assets/images/pickacardgame.png';
import cardgm2 from '../../public/assets/images/pickacardgame2.png';
import cruise1 from '../../public/assets/images/cruise4.png';
import cruise2 from '../../public/assets/images/cruise5.png';
import rpg1 from '../../public/assets/images/r-p-s-gamefive.png';
import rpg2 from '../../public/assets/images/r-p-s-gamefour.png';
import bm1 from '../../public/assets/images/bonesandmannersfive.png';
import bm2 from '../../public/assets/images/Bonesandmannersone.png';
import ad1 from '../../public/assets/images/rpg-dragonrepeller2.png';
import ad2 from '../../public/assets/images/adventuregamefive.png';
import store1 from '../../public/assets/images/superstoreone.png';
import store2 from '../../public/assets/images/superstoreshopping.png';

const Projects = () => {
    return (
        <div className='text-center text-white bg-gradient-to-bl 	
bg-gray-600 	
bg-purple-800 h-screen sm:w-screen w-full overflow-scroll'>
            <h1 className=' font-extrabold p-3 sm:text-4xl text-2xl' >Projects Page</h1>
            <div className='flex justify-center flex-col items-center' >
                <div className='flex sm:flex-row sm:gap-10 gap-4 sm:p-1 p-0.1 flex-col'>
                    <a href="https://github.com/BookerFlowers/Functional-and-Chronological-Resume-Builder" className=' relative' >
                        <h3 className='hover:text-green-600'> Resume Builder</h3>
                        <img src={clock1} className='w-16 h-16 rounded-full' alt="clock1" /><img src={clock2} className='w-16 h-16 top-9 left-9 rounded-full absolute' alt="clock2" />

                    </a>
                    <a href="https://github.com/BookerFlowers/1st-ToDo-Drag-Drop" className='relative'>
                        <h3 className='hover:text-green-600'>ToDo App</h3>
                        <img src={todo2} className='w-16 h-16 rounded-full' alt="todo1" /><img src={todo1} className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="todo2" />

                    </a>
                    <a href="https://github.com/BookerFlowers/College-Football-Cards" className='relative'>
                        <h3 className='hover:text-green-600'>College Football Cards</h3>
                        <img src={cardgm} className='w-16 h-16 rounded-full' alt="pc1" /><img src={cardgm2} className='w-16 h-16 top-9 left-9 rounded-full absolute' alt="pc2" />

                    </a>
                </div>
                <div className='flex sm:flex-row gap-10 p-1 flex-col'>
                    <a href="https://github.com/BookerFlowers/Booker-Cruises" className='relative'>
                        <h3 className='hover:text-green-600'>Booker's Cruise</h3>
                        <img src={cruise1} className='w-16 h-16 rounded-full' alt="cruise1" /><img src={cruise2} className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="cruise2" />

                    </a>
                    <a href="https://github.com/BookerFlowers/BONES-and-Manners-Adoption" className='relative'>
                        <h3 className='hover:text-green-600'>Bone's & Manners</h3>
                        <img src={bm1} className='w-16 h-16 rounded-full' alt="bm1" /><img src={bm2} className='w-16 h-16 top-9 left-9 rounded-full absolute' alt="bm2" />

                    </a>
                </div>
                <div className='flex sm:flex-row gap-4 flex-col'>

                    <a href="https://github.com/BookerFlowers/rock-paper-scissors-master" className='relative'>
                        <h3 className='hover:text-green-600'>Rock, Paper, Scissors</h3>
                        <img src={rpg1} className='w-16 h-16 rounded-full' alt="rps1" /><img src={rpg2} className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="rps2" />

                    </a>
                    <a href="https://github.com/BookerFlowers/Adventure-Text-Node-Game" className='relative'>
                        <h3 className='hover:text-green-600'>Adventure Game</h3>
                        <img src={ad1} className='w-16 h-16 rounded-full' alt="tn1" /><img src={ad2} className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="tn2" />

                    </a>

                    <a href="https://github.com/BookerFlowers/Bookers-Super-Store" className='relative'>
                        <h3 className='hover:text-green-600'>Super Store</h3>
                        <img src={ad1} className='w-16 h-16 rounded-full' alt="store1" /><img src={ad2} className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="store2" />
                    </a>
                </div>


            </div>
            <div className='flex justify-center content-center m-28'>
                <img className='h-36 w-40 border-4 border-purple-800 rounded-full animate-bounce' src={avitar} alt="Dev Life" />
            </div>
        


        </div>


    );

};

export default Projects;