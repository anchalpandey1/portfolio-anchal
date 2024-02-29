import React from 'react'
import html from '../assets/html.jpg'; 
import css from '../assets/css.jpg';
import tailwind from '../assets/tailwind.png';
import js from '../assets/js.jpg';
import react from '../assets/react.jpg';
import rtk from '../assets/rtk.jpeg';
import python from '../assets/python.jpg';
import cpp from '../assets/cpp.jpg';
import bootstrap from '../assets/bootstrap.jpg';
import sql from '../assets/sql.avif';
import django from '../assets/django.png';

const Experience = () => {
  const tech=[
    {
      id:1,
      src:html,
      title:'HTML',
      style:'shadow-orange-500'
    },
    {
      id:2,
      src:css,
      title:'CSS',
      style:'shadow-blue-500'
    },
    {
      id:3,
      src:js,
      title:'JavaScript',
      style:'shadow-yellow-500'
    },
    {
      id:4,
      src:tailwind,
      title:'Tailwind Css',
      style:'shadow-sky-600'
    },
    {
      id:5,
      src:react,
      title:'ReactJs',
      style:'shadow-blue-600'
    },
    {
      id:6,
      src:rtk,
      title:'Redux Tool Kit',
      style:'shadow-purple-900'
    },
    {
      id:7,
      src:python ,
      title:'Python',
      style:'shadow-yellow-500'
    },
    {
      id:8,
      src:cpp,
      title:'C++',
      style:'shadow-blue-800'
    },
    {
      id:9,
      src:django,
      title:'Django',
      style:'shadow-teal-900'
    },
    {
      id:10,
      src:bootstrap,
      title:'Bootstrap',
      style:'shadow-purple-600'
    },
    {
      id:11,
      src:sql,
      title:'SQL',
      style:'shadow-gray-500'
    },
  ]



  return (
    <div name='experience' className='w-full h-full bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white md:h-full'>
      <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
        <div>
          <p className='text-4xl font-bold  border-b-4 border-gray-500 p-2 inline'>Experience</p>
          <p className='py-6'>These are the Technologies I've worked with</p>
        </div>
        <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 text-center py-8'>
          
        {
          tech.map(({id, src, title, style}) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} className='w-30 mx-auto' alt={title} />
              <p className='mt-4'>{title}</p>
            </div>
          ))
        }
        
      </div>
       
     
     
        </div>

    </div>
  )
}

export default Experience