import { useContext, FC } from 'react';
import { ApplicationContext } from '../../context/ApplicationContext';

import ChangeFilterValues from './ChangeFilterValues';
import StarButton from './StarButton';


const Filters: FC = () => {

  const { choosenStar, setChoosenStar, adults, setAdults, childrens, setChildrens } = useContext(ApplicationContext);
  const stars = [1, 2, 3, 4, 5];


  return (
    <>
      <div className="w-4/5 md:w-[600px] h-32 md:h-24 bg-white shadow-lg translate-y-[+50%] flex flex-col md:flex-row items-center rounded-xl md:rounded-full">
        
        <div className='py-2 md:pl-10'>
          {stars.map((button) => (

            <StarButton 
              key={button}
              color={button <= choosenStar ? 'yellow' : 'gray'}
              callback={() => setChoosenStar(button) }
            />

          ))}
        </div>



        <ChangeFilterValues 
          name="Adults"
          callback={setAdults}
          value={adults}
        />

        <ChangeFilterValues 
          name="Children"
          callback={setChildrens}
          value={childrens}
        />

      </div>
    </>
  )
}

export default Filters;