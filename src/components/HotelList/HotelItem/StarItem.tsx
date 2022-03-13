import { FC } from 'react';
import { BsFillStarFill } from 'react-icons/bs';


interface Props {
  id: number;
  starRating: string;

}

const StarItem: FC<Props> = ({ id, starRating }) => {

  return (
    <>
      <BsFillStarFill className='mr-2' color={id <= Number(starRating) ? 'yellow' : 'gray'} size={24} />
    </>
  )
}

export default StarItem;