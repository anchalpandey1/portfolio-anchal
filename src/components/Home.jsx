import React from 'react';
import { MdKeyboardArrowRight } from 'react-icons/md';
import heroimg from '../assets/heroimg.jpeg';



const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-gray-800 to-grey-800 flex items-center justify-center'>
    <div className='text-white max-w-screen-lg mx-auto flex flex-col item-center justify-center h-full px-4 md:flex-row'>
     <div className='flex flex-col justify-center h-full'>
     <h1 className='text-6xl sm;text-8xl font-bold text-white'>Hey there!</h1>
     <h2 className='text-4xl sm;text-6xl font-bold text-white'>I'm Full Stack Developer</h2>
     <p className='text-grey-500 py-4 mx-w-md '>
      I'm a pre final year computer science student
       who loves to explore new technologies and write about them.
      Currently I love to work on Web Application using Technology like<br></br>
      <b className='font-bold'>ReactJs , Tailwindcss , Redux ,RTQuery  </b>
      </p>
      <div>
      <button className=' group text-white w-fit px-6 py-3 my-2 flex item-center rounded-md bg-gradient-to-4 bg-gradient-to-r from-cyan-500 to-blue-500
      cursor-pointer'>
      Portfolio
      <span className='group-hover:rotate-90  duration-300'> <MdKeyboardArrowRight size={25} className='ml-1'/></span>
      </button>
      </div>
     </div>
     <div >
     <img src={heroimg} className='rounded-2xl mx-auto w-2/3 md:w-full  md:mt-[30%]  mb-4'/>
     </div>
     </div>
   
    </div>
  );
};

export default Home;
