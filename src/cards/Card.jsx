import React from 'react';
import { FaMap } from 'react-icons/fa';

const Card = ({ imagem, cidade, descricao }) => {
  return (
    <a 
    href="#" 
    className="p-3 bg-white  w-full h-[300px] flex flex-col roundedlg relative rounded-lg">
      <div>
        <div className="flex justify-between items-center rounded-lg font-bold gap-3 bg-white/60 absolute top-9 left-6 sm:left-10 p-2">
            <FaMap />
            <p>{cidade}</p>
        </div>
        <div>
            <img src={imagem} className="w-full h-[200px] object-cover rounded-md" />
        </div>
      </div>
      <div className="pt-2">
        <h2 className="font-bold text-lg">{descricao}</h2>
      </div>
    </a>
  )
}

export default Card
