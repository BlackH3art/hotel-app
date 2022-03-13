import { FC } from "react";


interface Props {
  name: String;
  callback: React.Dispatch<React.SetStateAction<number>>;
  value: number;
}

const ChangeFilterValues: FC<Props> = ({ name, callback, value }) => {

  return (
    <>
      <div className="py-2 md:pl-10 flex items-center">
          <p>
            {name}: 
          </p>
          <button onClick={() => callback((prev) => prev + 1)}  className='text-lg font-bold flex items-center w-[30px] h-[25px] border-[1px] border-black px-2 mx-2'> + </button>
          <p>
            {value}
          </p>
          <button onClick={() => callback((prev) => prev - 1)} disabled={value === 0} className='btn text-lg font-bold flex items-center w-[30px] h-[25px] border-[1px] border-black px-2 mx-2'> - </button>
        </div>
    </>
  )
}

export default ChangeFilterValues;