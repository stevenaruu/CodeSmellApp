import React, { useState } from 'react'
import { INavbar } from './Navbar.interfaces'
import { motion, AnimatePresence } from 'framer-motion';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const Navbar = (props: INavbar) => {
  const { listSmell, name, direct } = props;
  const location = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <motion.div
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.5 }}
        className={isOpen ? 'w-screen h-screen top-0 bottom-0 fixed bg-black/70' : ''}
      />
      <div className='gap-10 p-10 bg-black/60 text-lg font-medium hidden lg:flex lg:justify-center'>
        {listSmell.map((smell) => (
          <motion.div
            whileHover={{ scale: 1.02 }}
            onHoverStart={e => { }}
            onHoverEnd={e => { }}
            key={smell.id}
            className='cursor-pointer hover:text-sky-500 transition duration-300'
            onClick={() => direct && direct(smell.id)}
          >
            {smell.name}
          </motion.div>
        ))}
      </div>
      <div className='p-5 bg-black/60 flex lg:hidden'>
        <svg className="w-6 h-6 cursor-pointer active:text-sky-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleClick}>
          {!isOpen &&
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 6H4M20 12H4m7 6H4" />
          }
        </svg>
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ duration: 0.5 }}
              className='fixed bg-black/90 w-4/5 top-0 left-0 bottom-0 h-screen'
            >
              <div className='flex justify-between p-5 items-center'>
                <p className='font-semibold'>{name}</p>
                <svg className="w-6 h-6 cursor-pointer active:text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" onClick={handleClick}>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <hr />
              <div className='flex flex-col gap-5 p-5'>
                {listSmell.map((smell) => (
                  <div
                    key={smell.id} className='cursor-pointer hover:text-sky-500 transition duration-300'
                    onClick={() => {
                      handleClick();
                      direct && direct(smell.id);
                    }}
                  >
                    {smell.name}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  )
}

export default Navbar