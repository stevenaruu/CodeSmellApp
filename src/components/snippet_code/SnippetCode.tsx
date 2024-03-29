import React, { useState } from 'react'
import { ISnippetCode } from './SnippetCode.interfaces'
import { CopyBlock, dracula } from 'react-code-blocks'
import { motion, AnimatePresence } from 'framer-motion';

const SnippetCode = (props: ISnippetCode) => {
  const { text, codes } = props
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='mb-10 bg-gray-200 rounded-md'>
      <div className='flex justify-between items-center bg-gray-200 pl-4 rounded-md'>
        <p className="text-4xl font-bold">{text}</p>
        <svg className={isOpen ? 'rotate-180' : ''} width="70px" height="70px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" onClick={handleClick}>
          <rect x="0" fill="none" width="24" height="24" />
          <g className='cursor-pointer'>
            <path d="M7 10l5 5 5-5" fill='#5d5d5d' />
          </g>
        </svg>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="content"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {codes?.map((code) => (
              <div key={code.id} className='mt-5 p-4'>
                <p className='bg-gray-300 w-fit px-2 py-1 mb-2 font-bold text-lg rounded-sm'>{code.class}.java</p>
                <CopyBlock
                  language="java"
                  text={code.code}
                  showLineNumbers
                  theme={dracula}
                  wrapLongLines={true}
                />
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default SnippetCode
