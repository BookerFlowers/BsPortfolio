import React, { useState } from 'react';
import CallLink from '../Components/Call';


const Skills = () => {

    const [message, setMessage] = useState('');

    const [isPopupVisible, setPopupVisible] = useState(false);
    // email function for primary email
    const handleSendEmail = () => {
        const email = "flowersbooker2025.gmail.com";
        const subject = "Contact me at:";

        window.location.href = 'mailto:${flowersbooker2025@gmail.com}?contact=${}';
    }


    return (
        <div className=' bg-black text-white p-1 gap-20 w-full h-screen overflow-scroll'>
            <h1 className='flex flex-row items-center justify-center sm:text-4x1 text-2xl font-extrabold font-sans'>Skill Set:</h1>

            <div className='flex sm:flex-row flex-col items-center justify-center gap-10'>

                <div className='flex flex-row items-center justify-center'>

                    <div className='flex flex-col items-center justify-center gap-6'>
                        <p>HTML5</p>
                        <p>CSS</p>
                        <p>Tailwind</p>
                        <p>JavaScript</p>
                        <p>Node.js</p>
                    </div>
                    <div className='flex flex-col items-center justify-center gap-6'>
                        <p>BootStrap</p>
                        <p>React</p>
                        <p>Mongodb</p>
                        <p>Canvas</p>
                        <p>Express.js</p>
                    </div>


                </div>
                <div>
                    <img className='w-45 animate-bounce rounded-full border-4 border-purple-800' src="src\assets\images\Gemini_Generated_Image_hnvwp1hnvwp1hnvw.jpg" alt="book" />

                </div>
                <div className='flex flex-col items-center justify-center gap-6'>
                    <p>Communication</p>
                    <p>Team Work</p>
                    <p>Public Speaking</p>
                    <p>Problem Solving</p>
                    <p>Time Managment</p>
                    <p>Conflict Resolution</p>

                </div>

            </div>
            <div>

            </div>
            <h2 className='font-extrabold font-sans text-center'>Contact Me At:</h2>
            <div className='flex flex-row items-center justify-center'>
                {/* link to my primary email text box should be transparent until clicked */}
                <div className='flex flex-col gap-10'>
                    <a href='flowersbooker2025@gmail.com' className='hover:text-green-600'
                        onClick={(e) => {
                            e.preventDefault();
                            setPopupVisible(true);
                        }} > flowersbooker2025@gmail.com</a>
                    <textarea rows='4' cols='30' placeholder='enter your message here' value={message} onChange={(e) => setMessage(e.target.value)} />
                    <button className='bg-gray-800 rounded-full hover:text-green-600 border-4 border-purple-800' onClick={handleSendEmail}>Send </button>
                    <button className='bg-gray-800 rounded-full hover:text-green-600 border-4 border-purple-800' style={{ marginLeft: '10px' }} onClick={() => setPopupVisible(false)}>Close</button>
                    {/* link to call directly to my phone component */}
                    <div className='text-center bg-gray-800 rounded-full border-4 border-purple-800'>
                        <CallLink />
                    </div>
                </div>



            </div>


        </div>
    );

};

export default Skills;