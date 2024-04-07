import mario from '../../assets/images/mario-logo.gif'
import { motion } from 'framer-motion';

const Footer = () => {
  const openInNewTab = (url: string) => {
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div className='bg-footer bg-cover bg-[center_top_40rem]'>
      <div className='p-5 container mx-auto h-full flex lg:justify-between justify-center flex-col text-white gap-5 '>
        <p className='font-semibold text-center text-2xl'>COMP6106001 - Code Reengineering</p>
        <div className='flex justify-between flex-col gap-10 lg:gap-0 lg:flex-row my-5 text-center lg:text-left'>
          <div className='flex flex-col gap-2'>
            <p className='text-2xl font-bold'>Reference</p>
            <motion.p
              whileHover={{ scale: 1.02 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className='text-xl cursor-pointer hover:text-sky-500 transition duration-300' onClick={() => openInNewTab('https://refactoring.guru/')}
            >
              Refactoring Guru
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.02 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className='text-xl cursor-pointer hover:text-sky-500 transition duration-300'
              onClick={() => openInNewTab('https://sourcemaking.com/')}
            >
              Source Making
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.02 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className='text-xl cursor-pointer hover:text-sky-500 transition duration-300'
              onClick={() => openInNewTab('https://akmalrusli363.github.io/smell/Fowler/')}
            >
              Akmal Rusli Code Reengineering
            </motion.p>
            <motion.p
              whileHover={{ scale: 1.02 }}
              onHoverStart={e => { }}
              onHoverEnd={e => { }}
              className='lg:mt-2 mt-10 font-bold text-2xl cursor-pointer hover:text-sky-500 transition duration-300'
              onClick={() => openInNewTab('https://github.com/stevenaruu/CodeSmellApp')}
            >
              Code Repository
            </motion.p>
          </div>
          <img src={mario} className='w-48 h-48 lg:block hidden' />
          <div className='flex flex-col gap-2'>
            <p className='text-2xl font-bold'>Member</p>
            <p className='text-xl'>D6665 - REZKI YUNANDA, S.Kom., M.Kom</p>
            <p className='text-xl'>2602064802 - STEVEN</p>
            <p className='text-xl'>2602075440 - WILSON WIJAYA</p>
          </div>
        </div>
        <p className='text-2xl text-center font-semibold'> &copy; 2024 | Website made with ❤</p>
      </div>
    </div>
  )
}

export default Footer