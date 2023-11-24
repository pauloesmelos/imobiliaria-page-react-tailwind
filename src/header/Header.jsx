import React from 'react';
import { FaHeart, FaSearch, FaUser } from 'react-icons/fa';
import { IoMenu } from 'react-icons/io5';
import MenuMobile from '../menu-mobile/MenuMobile';

const Header = () => {
  const [mobile, setMobile] = React.useState(false);
  const openMobileMenu = () => {
    setMobile(true);
  }
  return (
    <header className="w-full py-2 bg-white px-4">
      <div className="flex justify-between gap-4 sm:gap-2 items-center">
        <div className="flex justify-between gap-2 items-center sm:w-[50%] rounded-md bg-slate-200 px-4 py-2">
            <FaSearch
            className="text-xl text-gray-500 hover:text-rose-400 cursor-pointer duration-300"
            />
            <input
            className="w-full bg-transparent outline-none"
            type="text"
            placeholder="Pesquise sua casa ou apartamento" 
            />
        </div>
        <div className="flex items-center gap-5">
            <div className="hidden sm:flex bg-slate-200 rounded-full p-2 cursor-pointer group hover:bg-rose-200 duration-300">
                <FaHeart
                className="text-lg text-gray-500 group-hover:text-rose-600 duration-300" 
                />
            </div>
            <div>
                <button className="flex justify-between items-center bg-rose-500 text-white p-2 gap-2 rounded-md font-medium
                hover:bg-[#fff] hover:text-rose-500 duration-300 border-2 border-rose-500 text-sm">
                    <span className="hidden sm:flex">Sign In</span>
                    <FaUser />
                </button>
            </div>
        </div>
        <button
        onClick={openMobileMenu}
        className="text-5xl text-slate-400 duration-300 hover:text-rose-500 sm:hidden">
            <IoMenu />
        </button>
      </div>
      <MenuMobile mobile={mobile} setMobile={setMobile} />
    </header>
  )
}

export default Header;