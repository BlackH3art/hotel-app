import { useState, useEffect, FC, useContext } from 'react';
import { motion } from 'framer-motion';
import { getRoomTypes } from '../../../api';
import { ApplicationContext } from '../../../context/ApplicationContext';
import { RoomInterface } from '../../../interfaces/RoomInterface';

import ImageSlider from './ImageSlider';
import RoomItem from './RoomItem/RoomItem';
import StarItem from './StarItem';
import LoadingIndicator from '../../LoadingIndicator/LoadingIndicator';
import ErrorComponent from '../../ErrorPage/ErrorComponent';


interface Props {
  id: string;
  name: string;
  address1: string;
  address2: string;
  postcode: string;
  town: string;
  country: string;
  starRating: string; 
  images: { url: string }[]
}

const HotelItem: FC<Props> = ({ id, name, address1, address2, postcode, town, country, starRating, images }) => {

  const [rooms, setRooms] = useState<RoomInterface[]>([]);
  const [error, setError] = useState<boolean>(false);
  const { adults, childrens } = useContext(ApplicationContext);
  const stars = [1, 2, 3, 4, 5];


  useEffect(() => {

    async function fetchAllRoomsFromHotel(hotelId: string) {
      try {
        const { data } = await getRoomTypes(hotelId);

        setTimeout(() => {
          setRooms(data.rooms);
        }, 1000);

      } catch (error) {
        setError(true);
      }
    }

    fetchAllRoomsFromHotel(id);
  }, []);

  const filteredRooms = rooms.filter((room) => room.occupancy.maxAdults >= adults && room.occupancy.maxChildren >= childrens)


  // this component is showing all the necessary info about the hotel
  // also printing all rooms that are in this hotel.

  return (
    <>
      <motion.div initial={{ x: -100, opacity: 0 }} animate={{ x: 0, opacity: 1}} exit={{ x: 200, opacity: 0}} className="w-full flex flex-col shadow-xl bg-white  md:border-4 border-black mb-10">
        <div className="w-full flex flex-col md:flex-row">

          <h2 className='md:hidden font-semibold text-3xl p-2'>
            {name}
          </h2>

          <div className="md:hidden flex p-4">
            {stars.map((item) => (
              <StarItem id={item} key={item} starRating={starRating} />
            ))}
          </div>

          <ImageSlider images={images} />

          <div className="p-4 w-full">
            <h2 className='hidden md:block font-semibold text-3xl'>
              {name}
            </h2>
            <p>
              {address1}
            </p>
            <p>
              {address2}
            </p>
            <p>
              {postcode} - {town}
            </p>
            <p>
              {country}
            </p>
          </div>

          <div className="hidden md:flex p-4">
            {stars.map((item) => (
              <StarItem id={item} key={item} starRating={starRating} />
            ))}
          </div>

        </div>


        {rooms.length ? filteredRooms.map((item) => {

          let { id, name, occupancy, longDescription } = item;

          return (
            <RoomItem 
              key={id}
              name={name}
              occupancy={occupancy}
              longDescription={longDescription}
            />
          )
        }) : (
          <div className="w-full flex items-center justify-center border-t-2 border-gray-400">
            {error ? <ErrorComponent small={true} /> : <LoadingIndicator />}
          </div>
        )}

      </motion.div>
    </>
  )
}

export default HotelItem;