import { FC } from 'react';
import { motion } from 'framer-motion';
// icons
import { FaChild } from 'react-icons/fa';
import { BsFillPeopleFill } from 'react-icons/bs';

// interfaces
import { OccupancyInterface } from '../../../../interfaces/OccupancyInterface';



interface Props {
  name: string;
  occupancy: OccupancyInterface;
  longDescription: string;
}

const RoomItem: FC<Props> = ({ name, occupancy, longDescription }) => {

  return (
    <>
      <motion.div initial={{ opacity: .2, y: -50 }} animate={{ opacity: 1, y: 0 }} className='w-full flex flex-col md:flex-row border-t-2 border-gray-400'>

        <div className="w-full flex flex-col md:w-1/5 p-8">
          <h2 className='font-semibold text-xl mb-5'>{name}</h2>

          <div className="flex items-center md:justify-between">
            <BsFillPeopleFill size={24} className="ml-5"/>
            <p className='text-lg px-4'>
              adults: {occupancy.maxAdults}
            </p>
          </div>

          <div className="flex items-center md:justify-between">
            <FaChild size={24} className="ml-5"/> 
            <p className='text-lg px-4'>
              children: {occupancy.maxChildren}
            </p>
          </div>
        </div>



        <div className="w-4/5 flex items-center">
          <p className='p-5'>
            {longDescription}
          </p>
        </div>
      </motion.div>
    </>
  )
}

export default RoomItem;