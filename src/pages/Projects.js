import React from 'react';
import rework from '../assets/rework-task.png';
import showfinder from '../assets/show-finder.png';

const Projects = () => {
    const projects = [
        {
            name: 'Rework Task',
            description: 'A task management app built with React, Redux, and Firebase',
            image: rework,
            demo: 'https://mr-shreyansh.github.io/rework-task/',
            code: 'https://github.com/mr-shreyansh/rework-task.git',
        },
        {
            name: 'Show Finder',
            description: 'A web app to find your favourite shows and movies',
            image: showfinder,
            demo: 'https://mr-shreyansh.github.io/show-finder/',
            code: 'https://github.com/mr-shreyansh/show-finder.git',
        },
    ];
    return (
        <div id='projects' className='flex flex-col items-center w-full min-h-screen pt-5 md:h-screen bg-gradient-to-b from-zinc-900 to-stone-950'>
            <di className="flex flex-col items-center pb-8 text-stone-300">
                <p className='mb-3 text-3xl border-gray-500 border-b-3'>My Projects</p>
                <p className='text-stone-400'>Check out out some of my work right here</p>
            </di>
            <div className='grid gap-8 px-12 place-content-center w-[90vw] sm:grid-cols-2 lg:grid-cols-3 sm:px-0'>

               {
                     projects.map((project) => (
                        <div className='flex flex-col justify-center max-w-[321px] p-0 rounded-lg drop-shadow-3xl border'>
                        <img src={project.image} alt="project" className='duration-200 rounded-md hover:scale-105 w-[320px] h-[250px]' />
                        <div className='flex items-center justify-center text-white '>
                            <button className='w-1/2 px-4 py-2 m-2 duration-200 border rounded-bl-md hover:scale-105 hover:bg-stone-50 hover:text-stone-800'><a href={project.demo}>Demo</a></button>
                            <button className='w-1/2 px-4 py-2 m-2 duration-200 border hover:scale-105 rounded-br-md hover:bg-stone-50 hover:text-stone-800'><a href={project.code}>Code</a></button>
                        </div>
                    </div>
                        ))
               }

            </div>
        </div>
    )
}

export default Projects