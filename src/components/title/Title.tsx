import React from 'react'
import { motion } from 'framer-motion';
import { ITitle } from './Title.interfaces';

const Title = (props: ITitle) => {
  const { text } = props
  const textArray = text.split(" ");

  return (
    <div className="mb-10 text-3xl font-bold md:text-5xl text-center">
      {textArray.map((el, i) => (
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            duration: 2,
            delay: i / 10,
          }}
          key={i}
        >
          {el}{" "}
        </motion.span>
      ))}
    </div>)
}

export default Title