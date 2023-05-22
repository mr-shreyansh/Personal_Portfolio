import React from 'react'
import github from '../assets/github-mark.png'
import facebook from '../assets/facebook.png'
import instagram from '../assets/instagram.png'
import linkedin from '../assets/linkedin.png'
const About = () => {
    const media = [
        {
            name: 'Github',
            link: ''
        },
        {
            name: 'LinkedIn',
            link: ''
        },
        {
            name: 'Instagram',
            link: ''
        },
        {
            name: 'Twitter',
            link: ''
        },
        {
            name: 'Facebook',
            link: ''
        },
    ]
    return (
        <div id='about' className='relative w-full h-screen bg-gradient-to-b from-zinc-900 to-stone-950'>
            <h1 className='pt-3 mb-5 text-4xl text-center stroke-neutral-500 text-stone-300'>About</h1>
            <div className='flex items-center justify-center w-full '>
                <p className='px-5 text-stone-400'>
                    Hello, I'm Shreyansh, a student at IIT Kharagpur and a full stack developer.
                    I specialize in building websites and applications using React, Node, and MongoDB.
                    Through my 2 years of experience in web development at IIT Kharagpur, I have worked with various technologies and frameworks.
                    I have been part of the web developent team of Nehru Hall of Residence, IIT Kharagpur.
                    I was also part of web developent team of GYWS and Team Shakti.
                </p>
            </div>
            <div className='mt-5 absolute w-[90vw] ms-[4vw] bottom-3 bg-gradient-to-tr backdrop-blur-xl from-purple-500 to-[#0fba8c] border rounded-lg'>
                <h1 className='mb-3 text-xl text-center'>Connect</h1>
                <div className='backdrop-blur-xl'>

                    <div className='flex flex-wrap justify-around py-3'>
                        <a href='https://github.com/mr-shreyansh'>
                            <img className='h-[10vw]  max-h-[100px] hover:scale-105 duration-200' src={github} alt='git' />
                        </a>
                        <a href='https://www.linkedin.com/in/shreyansh-gaikwad-a1b104230'>
                            <img className='h-[10vw] max-h-[100px] hover:scale-105 duration-200' src={linkedin} alt='git' />
                        </a>
                        <a href='https://www.linkedin.com/in/shreyansh-gaikwad-a1b104230'>
                            <img className='h-[10vw] max-h-[100px] hover:scale-105 duration-200' src={facebook} alt='git' />
                        </a>
                        <a href='https://www.linkedin.com/in/shreyansh-gaikwad-a1b104230'>
                            <img className='h-[10vw] max-h-[100px] hover:scale-105 duration-200' src={instagram} alt='git' />
                        </a>


                    </div>
                </div>
            </div>

        </div>
    )
}

export default About