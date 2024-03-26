import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Tooltip from '@mui/material/Tooltip';
import { smellData } from "../../utils/smell";
import Header from "../../components/header/Header";
import { motion } from 'framer-motion';

interface OpenTooltipState {
  [key: string]: boolean;
}

const SmellPage = () => {
  const navigate = useNavigate();
  const { name } = useParams();
  const smell = smellData.find(smell => smell.type === name);
  const [openTooltip, setOpenTooltip] = useState<OpenTooltipState>({});

  useEffect(() => {
    if (smell == null) navigate('/');
    window.scrollTo(0, 0);
    document.title = smell?.name || '';
  }, [])

  const handleDirect = (type: string) => {
    navigate(`/smell/${name}/${type}`);
  }

  const scrollToSection = (id: number) => {
    const element = document.getElementById(id.toString());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleTooltipClose = (id: string) => {
    setOpenTooltip(prevState => ({
      ...prevState,
      [id]: false
    }));
  };

  const handleTooltipOpen = (id: string, solution: string) => {
    navigator.clipboard.writeText(solution)
    setOpenTooltip(prevState => ({
      ...prevState,
      [id]: true
    }));
    setTimeout(() => {
      handleTooltipClose(id);
    }, 1000);
  };

  return (
    <>
      <Header
        name={smell?.name || ''}
        description={smell?.description || ''}
        wallpaper='bg-smell'
        isNavbar={true}
        listSmell={smell?.smell || []}
        direct={scrollToSection}
      />
      <div className="container mx-auto mb-10">
        <p className="text-3xl font-bold text-sky-500">{smell?.name}</p>
        {smell?.smell.map((smellItem) => (
          <div key={smellItem.id} id={smellItem.id.toString()} className="mt-10 bg-gray-100 p-10">
            <p className="text-2xl font-bold">{smellItem.name}</p>
            <img className="my-10" src={smellItem.image} alt="" />
            <p className="mt-1 text-justify">{smellItem.description}</p>
            <div className="mt-1">
              <p className="font-semibold text-lg text-sky-500 mb-1">Solution</p>
              <div className="flex gap-2 md:flex-row flex-col">
                {smellItem.solutions.map((solution, index) => (
                  <Tooltip
                    key={index}
                    PopperProps={{
                      disablePortal: true,
                    }}
                    onClose={() => handleTooltipClose(`${smellItem.id}_${index}`)}
                    open={openTooltip[`${smellItem.id}_${index}`] || false}
                    disableFocusListener
                    disableHoverListener
                    disableTouchListener
                    title="Copied to clipboard!"
                    arrow
                  >
                    <div
                      className="bg-gray-200 px-2 py-1 w-fit rounded-sm cursor-pointer"
                      onClick={() => handleTooltipOpen(`${smellItem.id}_${index}`, solution)}
                    >
                      {solution}
                    </div>
                  </Tooltip>
                ))}
              </div>
            </div>
            <div className="w-full flex mt-5">
              <motion.span
                whileHover={{ scale: 1.02 }}
                onHoverStart={e => { }}
                onHoverEnd={e => { }}
                className="bg-sky-500 font-bold text-xl text-[#fafafa] px-5 py-2 rounded-sm cursor-pointer"
                onClick={() => handleDirect(smellItem.type)}
              >
                EXAMPLE CODE {'{ }'}
              </motion.span>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default SmellPage;
