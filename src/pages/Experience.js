import React from 'react';
import flutter from '../assets/flutter.svg';
import react from '../assets/react-2.svg';
import node from '../assets/nodejs-2.svg';
import css from '../assets/css-3.svg';
import html from '../assets/html-1.svg';
import javascript from '../assets/javascript-1.svg';
import mongodb from '../assets/mongodb-icon-1.svg';
import tailwind from '../assets/tailwind-css-2.svg';


const Experience = () => {
    const skills = [
        {
            image: html,
            name: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            image: css,
            name: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            image: javascript,
            name: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            image: react,
            name: 'React',
            style: 'shadow-blue-500'
        },
        {
            image: flutter,
            name: 'Flutter',
            style: 'shadow-blue-600'
        },
        {
            image: node,
            name: 'Node.js',
            style: 'shadow-green-500'
        },

        {
            image: mongodb,
            name: 'MongoDB',
            style: 'shadow-green-500'
        },
        {
            image: tailwind,
            name: 'Tailwind CSS',
            style: 'shadow-sky-500'
        },
    ];
    return (
        <div id='experience' className='w-full pb-5 lg:h-screen bg-gradient-to-b from-stone-950 to-zinc-900'>
            <div>
                <div className="w-full bg-stone-950">
                    <h1 className='pt-3 mb-5 text-4xl text-center stroke-neutral-500 text-stone-300'>Experience</h1>
                    <p className='text-center text-stone-400'>These are the technologies I've worked with</p>
                </div>
            </div>
            <div className='flex flex-wrap justify-around gap-[13vw]'>
               {
                    skills && skills.map((skill) => (
                        <div className={`flex flex-col items-center  rounded-lg justify-center ${skill.style} duration-500 shadow-md hover:scale-105`}>
                            <img src={skill.image} alt='skill' className='w-[120px] h-[100px]  lg:h-[150px] lg:w-[170px] md:w-[150px] md:h-[120px] mx-auto '/>
                            <p className='text-stone-300'>{skill.name.toString()}</p>
                            </div>
                            )
                     )
               } 
            </div>
        </div>
    )
}

export default Experience