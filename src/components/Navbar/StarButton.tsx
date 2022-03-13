import { FC } from 'react';
import { BsFillStarFill } from 'react-icons/bs';

interface Props {
  color: string;
  callback: () => void;
}

const StarButton: FC<Props>= ({ color, callback }) => {

  return (
    <>
      <button onClick={callback}> 
        <BsFillStarFill color={color} size={24} /> 
      </button>
    </>
  )
}

export default StarButton;