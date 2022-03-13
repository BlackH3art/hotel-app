import { FC, useState } from "react";
import { motion } from 'framer-motion';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';

interface Props {
  images: { url: string }[]
}

const ImageSlider: FC<Props> = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  
  const moveRight = () => {

    if(currentIndex < images.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } 
  }

  const moveLeft = () => {

    if(currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
    }
  }

  return (
    <>
      <div className="relative flex justify-center h-72 md:h-64 md:w-96 m-4">

        <motion.button whileTap={{ scale: 0.9 }} onClick={moveLeft} disabled={currentIndex === 0} className="btn-slider text-white btn z-10 bg-transparent absolute h-full left-0 w-6 flex justify-center items-center">
          <BsChevronCompactLeft size={32} />
        </motion.button>

        <div className="w-full relative flex items-center">
          {images.map((image, index) => (
            <div key={index} className="absolute w-full">
              <img style={{ opacity: currentIndex === index ? 1 : 0, transition: ".3s" }} className="w-full" src={image.url} alt="" />
            </div>
          ))}
        </div>


        <motion.button whileTap={{ scale: 0.9 }} onClick={moveRight} disabled={currentIndex === images.length - 1} className="btn-slider text-white btn z-10 bg-transparent absolute h-full right-0 w-6 flex justify-center items-center">
          <BsChevronCompactRight size={32} />
        </motion.button>
        
      </div>
    </>
  )
}

export default ImageSlider;