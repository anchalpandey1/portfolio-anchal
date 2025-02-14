import React from 'react'
import ticket from '../assets/ticket.jpg';
import crud from '../assets/crud.jpeg';
import resume from '../assets/resume.webp';
import student from '../assets/student.jpg';
import youtube from '../assets/youtube.png';
import event from '../assets/event.png';
import todo from '../assets/todo.png';
const Portfolio = () => {

    const portfolio = [
        {
            id: 1,
            title: "Ticket Management System",
            src: ticket,
            href: "https://github.com/anchalpandey1/Backend_Tms"
        },
        {
            id: 2,
            title: "Resume Builder",
            src: resume,
            href: "https://github.com/anchalpandey1/resume"
        },
        {
            id: 3,
            title: "Student Management System",
            src: student,
            href: "https://github.com/anchalpandey1/student-management-cpp"
        },
        {
            id: 4,
            title: "YouTube Clone",
            src: youtube,
            href: "https://github.com/anchalpandey1/youtube_clone_javascript"
        },
        {
            id: 5,
            title: "Event Management System",
            src: event,
            href: "https://github.com/anchalpandey1/Backend_Tms"
        },
        {
            id: 6,
            title: "ToDo-List",
            src: todo,
            href: "https://github.com/anchalpandey1/todo_tailwind"
        },
        {
            id: 7,
            title: "CRUD Operation ",
            src: crud,
            href: "https://github.com/anchalpandey1/CRUD_Project"
        },
       
    ]

    return (
        <div name="portfolio" className='w-full h-full bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white md:h-full'>
            <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-gray-500 '>Portfolio</p>
                    <p className='py-6'>Check out some of my work right here</p>
                </div>
                <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0'>

                    {portfolio.map(({ id, title, src, href }) => {
                        return (
                            <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                                <h3 className='text-center text-xl font-semibold my-2'>{title}</h3>
                                <img src={src} alt={title} className='rounded-md duration-200 hover:scale-105' />
                                <div className='flex items-center justify-center'>
                                    <button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button>
                                    <a href={href} target="_blank" rel="noopener noreferrer" className='w-1/2'>
    <button className='w-full px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button>
</a>

                                </div>
                            </div>
                        );
                    })}

                </div>
            </div>
        </div>
    )
}

export default Portfolio;
