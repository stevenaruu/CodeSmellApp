import React from 'react'
import { IMusicCard } from './MusicCard.interfaces'
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';

const MusicCard = (props: IMusicCard) => {
  const { id, type, owner, name, style, volume, image } = props
  const navigate = useNavigate();

  const handleClick = (name: string) => {
    navigate(`/smell/${name}`)
  }

  return (
    <motion.div
      key={id}
      whileHover={{ scale: 1.03 }}
      onHoverStart={e => { }}
      onHoverEnd={e => { }}
      className="hover:shadow-lg transition duration-500 bg-white shadow-md rounded-lg overflow-hidden cursor-pointer"
      onClick={() => handleClick(type)}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="lg:h-6 lg:w-6 w-5 h-5 text-sky-500"
          >
            <path d="M9 18V5l12-2v13"></path>
            <circle r="3" cy="18" cx="6"></circle>
            <circle r="3" cy="16" cx="18"></circle>
          </svg>
          <div className="mx-3">
            <h3 className="lg:text-lg text-sm font-medium text-gray-700">
              {owner}
            </h3>
            <p className="text-gray-500 lg:text-base text-sm">{name}</p>
          </div>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="lg:h-6 lg:w-6 w-5 h-5 text-gray-500"
          >
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="lg:h-6 lg:w-6 w-5 h-5 text-sky-500 ml-3"
          >
            <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
          </svg>
        </div>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex items-center justify-center"></div>
      </div>
      <img className='m-auto' src={image} alt="" />
      <div className="px-6 py-4">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinejoin="round"
            strokeLinecap="round"
            stroke="currentColor"
            height="24"
            fill="none"
            className="h-5 w-5 text-gray-500"
          >
            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
          </svg>
          <div className="w-full mx-3">
            <div
              className="relative mt-1 h-1 bg-gray-200 rounded overflow-hidden"
            >
              <motion.div
                initial={{ x: '-100%' }}
                animate={{ x: 0 }}
                exit={{ x: '-100%' }}
                transition={{ duration: 1 }}
                className={`absolute left-0 top-0 h-full bg-sky-500 ${style}`}
              />
            </div>
          </div>
          <p className="text-sm text-gray-500">{volume}</p>
        </div>
        <div
          className="flex justify-between text-sm text-gray-500 mt-3"
        >
          <span> 00:03 </span><span> 3:35 </span>
        </div>
      </div>
    </motion.div>
  )
}

export default MusicCard