import React from 'react';
import { IoClose } from 'react-icons/io5';

const MenuMobile = ({ mobile, setMobile }) => {
  const closeMobileMenu = () => {
    setMobile(false);
  }
  return (
    <nav className={`absolute w-full h-[280px] bg-white top-0 left-0 duration-300 ease-in-out ${mobile ? "z-30" : "mt-[-100%]"}`}>
      <div className="flex justify-center">
        <button
        onClick={closeMobileMenu}
        className="p-2 hover:text-rose-500 text-4xl duration-300">
            <IoClose />
        </button>
      </div>
      <div className="flex flex-col px-10">
        <a href="#" className="text-lg p-3 hover:bg-slate-200 font-bold rounded-lg">Aluguel</a>
        <a href="#" className="text-lg p-3 hover:bg-slate-200 font-bold rounded-lg">Comprar</a>
        <a href="#" className="text-lg p-3 hover:bg-slate-200 font-bold rounded-lg">Serviços</a>
        <a href="#" className="text-lg p-3 hover:bg-slate-200 font-bold rounded-lg">Comprar</a>
      </div>
    </nav>
  )
}

export default MenuMobile;