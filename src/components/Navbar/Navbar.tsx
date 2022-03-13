import { FC } from "react";
import Filters from "./Filters";
import './navbar.css';

const Navbar: FC = () => {

  return (
    <>
      <nav className="navbar w-full h-[400px]  ">
        <div className="filter-background w-full h-full flex flex-col items-center justify-end">

          <h1 className="text-6xl md:text-8xl font-bold text-white border-2 border-white p-4">
            Hotel app
          </h1>

          <Filters />

        </div>
      </nav>
    </>
  )
}

export default Navbar;