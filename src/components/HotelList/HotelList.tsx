import { useState, useEffect, useContext, FC } from "react";
import { AnimatePresence } from "framer-motion";

import HotelItem from "./HotelItem/HotelItem";
import ErrorComponent from "../ErrorPage/ErrorComponent";
import { ApplicationContext } from "../../context/ApplicationContext";

import { HotelInterface } from "../../interfaces/HotelInterface";
import { getAllHotels } from "../../api";


const HotelList: FC = () => {

  const [hotels, setHotels] = useState<HotelInterface[]>([]);
  const [error, setError] = useState<boolean>(false);
  const { choosenStar } = useContext(ApplicationContext);
  
  
  useEffect(() => {

    async function fetchAllHotelData() {
      try {
        const { data } = await getAllHotels();
        setHotels(data);

      } catch (error) {
        setError(true);
      }
    }

    fetchAllHotelData();

  });

  const filteredHotels = hotels.filter((hotel) => Number(hotel.starRating) >= choosenStar);

  
  // this component will display the list of hotels dependent on the selected stars rating

  return (
    <>
      <main className="flex flex-col bg-gray-200 items-center w-full min-h-[100vh]">
        <section className="w-full md:w-3/5 mt-24">

          {!error ? filteredHotels.map((item) => {

            let { id, name, address1, address2, postcode, town, country, starRating, images } = item;

            return (
              <HotelItem 
                key={id}
                id={id}
                name={name}
                address1={address1}
                address2={address2}
                postcode={postcode}
                town={town}
                country={country}
                starRating={starRating}
                images={images}
              />
            )
          }) : (
            <ErrorComponent small={false} />
          )}

        </section>
      </main>
    </>
  )
}

export default HotelList;