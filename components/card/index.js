import { Data } from '../../data.js';
import {AiFillGithub} from 'react-icons/ai';
import Link from 'next/link.js';
import Image from 'next/image.js';

import { motion } from 'framer-motion';

export default function CardComp() {
  return (
    <div className="backg">
    <div className='pt-20'>
    <h3 className="text-center bg-black gradient pt-10 pb-5 text-3xl lg:text-5xl font-bold">MEMBERS</h3>
    </div>
    <div className="flex flex-wrap  min-h-[900px] align-center justify-center pb-10 text-white">
        {Data.map((person, index) => (
            <motion.div key={index} whileHover={{
              position: 'relative',
              zIndex: 1,
              scale: [1, 1.1, 1.05],
              rotate: [0, 10, -10, 0],
              transition: {
                duration: .2
              },
              filter: [
                'hue-rotate(0) contrast(100%)',
                'hue-rotate(360deg) contrast(200%)',
                'hue-rotate(45deg) contrast(300%)',
                'hue-rotate(0) contrast(100%)'
              ],
            }}>
            
            <div key={index} className="w-[250px] min-h-[350px] lg:min-w-[300px] lg:min-h-[400px] m-5 rounded-xl hover:rotate-2 transition duration-300 bg-white bg-opacity-10 backdrop-filter backdrop-blur-lg fade-in">
                <div class="w-full h-48 lg:h-72 relative">
                  <Image src={`https://github.com/${person.username}.png`} layout="fill" objectFit="cover" alt="profile picture" className="rounded-t-xl"/>
                </div>
                <div className="flex flex-col">
                <h1 className="gradient text-center text-2xl font-bold my-3">{person.name}</h1>
                <div class="flex flex-row gap-1 items-center place-content-center">
                  <AiFillGithub className="w-8 h-8"/>
                  <a className="text-center text-md">@{person.username}</a>
                </div>
                <div className='flex flex-col justify-center items-center gap-1 mt-1'>
                <a className="text-center text-md">Branch: {person.branch}</a>
                <a className="text-center text-md">Year: {person.year}</a>
                </div>
                <div className='flex justify-center m-5'>
                <Link href={`https://github.com/${person.username}`}>
                  {/* <a className="bg-black w-1/2 h-10 rounded-lg mx-auto my-4 text-white flex items-center place-content-center border-4 border-gray-600 hover:border-yellow-300 hover:-rotate-3 transition-all ease-in">Visit Profile</a> */}
                  <div className='relative group'>
                  <div className='absolute -inset-0.5 bg-gradient-to-r from-yellow-500 to-red-400 rounded-lg blur opacity-50 group-hover:opacity-100 transition duration-300 animate-text'></div>
                  <button className='relative px-7 py-3 bg-gray-900 hover:bg-black rounded-lg leading-none group-hover:text-gray-200 transition duration-300'>Visit Profile</button>
                  </div>
                </Link>
                </div>
                </div>
            </div>

          </motion.div>
        ))}
    </div>
    <div className="bg-gray-600 h-20 flex items-center place-content-center">
      <a className="gradient font-bold text-xl md:text-2xl lg:text-4xl">Total Members: {Data.length}</a>
    </div>
    </div>
  )
}
