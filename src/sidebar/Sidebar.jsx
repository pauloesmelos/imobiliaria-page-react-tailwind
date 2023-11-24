import React from 'react';
import { FaPhone } from 'react-icons/fa6';

const Sidebar = () => {
  return (
    <aside className="font-Poppins h-screen w-[200px] bg-white hidden sm:flex border-r-2">
      <div className="fixed bg-white h-screen border-r-2">
        <div className="px-2 py-4">
            <h1 className="font-bold text-rose-500 text-2xl">DevHouse</h1>
        </div>
        <div className="flex flex-col w-[200px] px-3">
            <a 
            href="#"
            className="text-gray-500 font-medium p-3 mt-5 hover:bg-slate-100 hover:text-black/90 duration-300">
                Aluguel
            </a>
            <a
            href="#"
            className="text-gray-500 font-medium p-3 hover:bg-slate-100 hover:text-black/90 duration-300">
                Comprar
            </a>
            <a 
            href="#"
            className="text-gray-500 font-medium p-3 hover:bg-slate-100 hover:text-black/90 duration-300">
                Serviços
            </a>
            <a 
            href="#"
            className="text-gray-500 font-medium p-3 hover:bg-slate-100 hover:text-black/90 duration-300">
                Comprar
            </a>
        </div>
        <button className="bottom-[5%] left-10 fixed text-xl rounded-full bg-[#25D366] text-white p-3 font-medium animate-ping
        border-2 border-slate-300">
          <FaPhone/>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar;