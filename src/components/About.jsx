import React from 'react';

const About = () => {
  return (
    <div name="about" className="w-full h-auto bg-gradient-to-b from-gray-800 via-gray-800 to-black text-white">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">About</p>
        </div>
        
        <p className="text-lg sm:text-lg md:text-lg mt-8 break-words whitespace-normal text-wrap">
          Hey there! I am a passionate Software  Developer with hands-on experience in building scalable web applications. 
          With expertise in React.js, Node.js, MongoDB, and Express.js, I specialize in creating efficient, user-friendly, 
          and high-performance applications.
        </p>       
        <p className="text-lg sm:text-lg md:text-lg break-words whitespace-normal text-wrap">
          I have successfully completed multiple internships where I worked on real-world projects, ranging from ticket 
          management systems to full-stack platforms for coding challenges. My ability to develop robust APIs, optimize 
          system performance, and manage projects independently sets me apart.
        </p>

        <p className="text-lg sm:text-lg md:text-lg break-words whitespace-normal text-wrap">
          Beyond development, I enjoy solving complex problems and continuously improving applications for better efficiency. 
          I have delivered a seminar on Apache Kafka, showcasing my knowledge of real-time data streaming and distributed systems.
        </p>


        <p className="text-lg sm:text-lg md:text-lg break-words whitespace-normal text-wrap mb-10">
          I am always eager to learn new technologies and take on challenges that push my limits. If you’re looking for a dedicated 
          developer who values innovation and performance, let’s connect!
        </p>
      </div>
    </div>
  );
};

export default About;
