import React from 'react';
import second from 'react-icons/md';
import { MdFileDownload } from 'react-icons/md'; 

const Home = () => {
    return (
        <div id='home' className='w-full h-[100vh] bg-gradient-to-b from-stone-950 to-zinc-900'>
            <div className='flex flex-col items-center justify-center h-full max-w-screen-lg px-4 mx-auto md:flex-row'>
                <div className='flex flex-col justify-center h-full px-3 text-white'>
                    <h2 className='pb-3 text-4xl sm:text-6xl'>
                        Hi, I'm Shreyansh
                    </h2>
                    <p className='text-stone-400'>
                        I'm a student at IIT Kharagpur and a full stack developer.
                        I specialize in building websites and applications using React, Node, and MongoDB.
                    </p>
                    <div>
                        <button className='px-3 py-1 mt-3 transition-all ease-linear rounded-lg active:scale-100 bg-gradient-to-r from-purple-500 to-sky-400 focus:scale-95'>
                            Get CV
                            <MdFileDownload className='inline ms-1'/>
                        </button>
                    </div>
                </div>
                <div>
                    <img src='https://avatars.githubusercontent.com/u/56132780?v=4' alt='Shreyansh' className='w-2/3 mx-auto rounded-2xl md:w-full'/>
                </div>
                </div> 
        </div>
    )
}

export default Home