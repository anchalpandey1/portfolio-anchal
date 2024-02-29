import React from 'react'
import li from '../assets/li.avif';
import gi from '../assets/gi.jpg';
import wh from '../assets/wh.jpg';
import gm from '../assets/gm.webp';

const Contact = () => {
    const cont=[
        {
            id:1,
            src:li,
            href: 'https://www.linkedin.com/in/anchal-pandey-669193232/?lipi=urn%3Ali%3Apage%3Ad_flagship3_feed%3Bi%2FumoI6JTiug1wjBh9tOeA%3D%3D',
            title:'LinkedIn'
        },
        {
            id:2,
            src:gi,
            href: 'https://github.com/anchalpandey1',
            title:'Github'
        },
        {
            id:3,
            src:wh,
            href: 'https://wa.me/7054834998',
            title:'Whatsapp'
        },
        {
            id:4,
            src:gm,
            href: 'mailto:anchalpandey9076@gmail.com',
            title:'G-mail'
        },
    ]


  return (
    <div name='contact' className='w-full h-full bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white md:h-full'>
    <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full text-white'>
    <div>
    <p className='text-4xl font-bold  border-b-4 border-gray-500 p-2 inline'>Contact me</p>
    <p className='py-6'>Get In Touch me - Follow me</p>
    </div>
    <div className='w-full grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 px-12 sm:px-0 text-center py-8'>
          
    {
        cont.map(({id, src, title,href}) => (
          <div key={id} className='shadow-md hover:scale-105 duration-500 py-2 rounded-lg shadow-gray-600'>
            <img src={src} className='w-30 mx-auto' alt={title} />
            <a href={href} className='mt-4'  target='_blank' rel="noreferrer">
            {title}
          </a>
           
          </div>
        ))
      }
      
  
    </div>
    </div>
    </div>
  )
}

export default Contact