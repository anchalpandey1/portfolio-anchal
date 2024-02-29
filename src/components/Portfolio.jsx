import React from 'react'
import crud from '../assets/crud.jpeg';
import resume from '../assets/resume.webp';
import student from '../assets/student.jpg';
import youtube from '../assets/youtube.png';


const Portfolio = () => {

    const portfolio=[
        {
            id:1,
            src:crud,
            href:"https://github.com/anchalpandey1/CRUD_Project"
        },
        {
            id:2,
            src:resume,
            href:"https://github.com/anchalpandey1/resume"
        },
        {
            id:3,
            src:student,
            href:"https://github.com/anchalpandey1/student-management-cpp"
        },
        {
            id:4,
            src:youtube,
            href:"https://github.com/anchalpandey1/youtube_clone_javascript"
        },       
    ]


    return (
        <div name="portfolio" className='w-full h-full bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white md:h-full'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-gray-500 '>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div  className='grid  sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>
                                
                {
                    portfolio.map(({id,src})=>{
                        return (
                          <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                    <img src={src} alt=""
                                    className='rounded-md duration-200 hover:scale-105' />
                                    <div className='flex items-center justify'>
                                        <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                        <button  className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
                                    </div>
                                </div>                           
                        );
                    })
                }
                </div>
                
            </div>
        </div>
    )
}

export default Portfolio