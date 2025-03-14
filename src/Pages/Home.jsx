import React from 'react';

const Home = () => {



    return (

        <div className='flex items-center justify-center bg-black text-white p-1 h-screen w-full'>




            <div className='flex flex-col justify-center item-center sm:gap-4 gap-2 p-1.5'>
                <h1 className='text-5xl text-center'>Developer: Booker T. Flowers</h1>
                <div className='flex justify-center'>
                    <img className='h-72 w-72 border-4 border-purple-800' src="src\assets\images\Gemini_Generated_Image_9804w19804w19804.jpg" alt="" />
                </div>

                <h2 className='text-3xl text-center'>Junior Software Developer  </h2>
                <p className='text-center'>Booker is a graduate of Persevere where he earned his full stack certificate on December 13, 2025. He is currently an intern software developer with Banyan Labs. Currently enrolled in Grand Canyon University to take online classes to obtain a bachelors of arts degree in Web Design.  </p>
                <div className='flex justify-around '>
                    <button className='transition-scale-1.2 transition-colors hover:bg-green-500 p-0.5 h-0.125' onClick={() => window.location.href = 'https://www.linkedin.com/feed/'}><img src="src\assets\images\LinkedInlink.png" alt="linkedIn" /></button >
                    <button className='transition-scale-1.2 transition-colors hover:bg-green-500 p-0.5 h-0.125' onClick={() => window.location.href = 'https://github.com/BookerFlowers'}><img src="src\assets\images\GitHublink.png" alt="GitHub" /></button>
                </div>







            </div>


        </div>
    );

};

export default Home;