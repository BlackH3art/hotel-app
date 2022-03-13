import { FC } from 'react';
import error from '../../images/error.svg';

interface Props {
  small: boolean;
}

const ErrorComponent: FC<Props> = ({ small }) => {

  return (
    <>
      <div className='flex flex-col items-center'>
        <h1 className='text-4xl font-bold p-5'>
          I'm sorry
        </h1>
        <p className='text-2xl font-semibold pb-10 px-4'>
          There is some problem while fetching data. 
          Please, try again later!
        </p>

        {small ? (
          <img className='h-32 pb-5' src={error} />
        ) : (
          <img className='h-64' src={error} />
        )}
      </div>
    </>
  )
}

export default ErrorComponent;