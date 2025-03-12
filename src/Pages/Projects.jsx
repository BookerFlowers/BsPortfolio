import React from 'react';

const Projects = () => {
    return (
        <div className='flex flex-col items-center justify-center text-white bg-black h-screen sm:w-screen w-full overflow-scroll'>
            <h1 className=' font-extrabold sm:pb-20 pb-5' >Projects Page</h1>
            <div className='flex justify-center flex-col' >
                <div className='flex sm:flex-row sm:gap-10 gap-4 sm:p-1 p-0.1 flex-col'>
                    <a href="https://github.com/BookerFlowers/Functional-and-Chronological-Resume-Builder" className=' relative' >
                        <h3 className='hover:text-green-600'> Resume Builder</h3>
                        <img src="src\assets\images\resumebuilderone.png" className='w-16 h-16 rounded-full' alt="clock1" /><img src="src\assets\images\resumebuilderthree.png" className='w-16 h-16 top-9 left-9 rounded-full absolute' alt="clock2" />

                    </a>
                    <a href="https://github.com/BookerFlowers/1st-ToDo-Drag-Drop" className='relative'>
                        <h3 className='hover:text-green-600'>ToDo App</h3>
                        <img src="src\assets\images\firstto-do-apptwo.png" className='w-16 h-16 rounded-full' alt="todo1" /><img src="src\assets\images\firstto-do0app.png" className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="todo2" />

                    </a>
                    <a href="https://github.com/BookerFlowers/College-Football-Cards" className='relative'>
                        <h3 className='hover:text-green-600'>College Football Cards</h3>
                        <img src="src\assets\images\pickacardgame.png" className='w-16 h-16 rounded-full' alt="pc1" /><img src="src\assets\images\pickacardgame.png" className='w-16 h-16 top-9 left-9 rounded-full absolute' alt="pc2" />

                    </a>
                </div>
                <div className='flex sm:flex-row gap-10 p-1 flex-col'>
                    <a href="https://github.com/BookerFlowers/Booker-Cruises" className='relative'>
                        <h3 className='hover:text-green-600'>Booker's Cruise</h3>
                        <img src="src\assets\images\cruise4.png" className='w-16 h-16 rounded-full' alt="cruise1" /><img src="src\assets\images\cruise5.png" className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="cruise2" />

                    </a>
                    <a href="https://github.com/BookerFlowers/BONES-and-Manners-Adoption" className='relative'>
                        <h3 className='hover:text-green-600'>Bone's & Manners</h3>
                        <img src="src\assets\images\bonesandmannersfive.png" className='w-16 h-16 rounded-full' alt="bm1" /><img src="src\assets\images\Bonesandmannersone.png" className='w-16 h-16 top-9 left-9 rounded-full absolute' alt="bm2" />

                    </a>
                </div>
                <div className='flex sm:flex-row gap-4 flex-col'>

                    <a href="https://github.com/BookerFlowers/rock-paper-scissors-master" className='relative'>
                        <h3 className='hover:text-green-600'>Rock, Paper, Scissors</h3>
                        <img src="src\assets\images\r-p-s-gamefive.png" className='w-16 h-16 rounded-full' alt="rps1" /><img src="src\assets\images\r-p-s-gamefour.png" className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="rps2" />

                    </a>
                    <a href="https://github.com/BookerFlowers/Adventure-Text-Node-Game" className='relative'>
                        <h3 className='hover:text-green-600'>Adventure Game</h3>
                        <img src="src\assets\images\adventuregamefive.png" className='w-16 h-16 rounded-full' alt="tn1" /><img src="src\assets\images\rpg-dragonrepeller2.png" className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="tn2" />

                    </a>

                    <a href="https://github.com/BookerFlowers/Bookers-Super-Store" className='relative'>
                        <h3 className='hover:text-green-600'>Super Store</h3>
                        <img src="src\assets\images\superstoreone.png" className='w-16 h-16 rounded-full' alt="store1" /><img src="src\assets\images\superstoreshopping.png" className='w-16 h-16 top-9 left-9  rounded-full absolute' alt="store2" />
                    </a>
                </div>


            </div>

        </div>
    );

};

export default Projects;