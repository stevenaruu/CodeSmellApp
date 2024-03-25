import React from 'react'
import { IHeader } from './Header.interfaces'
import Navbar from '../navbar/Navbar'
import Title from '../title/Title'
import { useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = (props: IHeader) => {
  const { name, description, wallpaper, isNavbar, listSmell, direct } = props
  const navigate = useNavigate();
  return (
    <div className={`${wallpaper} relative bg-cover bg-[center_top_32rem] text-white mb-10`}>
      <svg
        className='absolute top-10 left-10 hidden md:block'
        height="110px"
        viewBox="0 0 512 512"
        width="110px"
        xmlSpace="preserve"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <motion.polygon
          whileHover={{ scale: 1.2, fill: '#0ea5e9' }}
          onHoverStart={e => { }}
          onHoverEnd={e => { }}
          className='cursor-pointer'
          points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256"
          fill='#fafafa'
          onClick={() => navigate(-1)}
        />
      </svg>
      <div className='p-10 md:p-36 text-center flex flex-col'>
        <Title
          text={name}
        />
        <p className="text-base md:text-lg">{description}</p>
      </div>
      {isNavbar &&
        <Navbar
          name={name}
          listSmell={listSmell || []}
          direct={direct}
        />
      }
    </div>
  )
}

export default Header