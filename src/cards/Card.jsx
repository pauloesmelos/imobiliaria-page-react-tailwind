import React from 'react';
import { FaMap } from 'react-icons/fa';

const Card = ({ imagem, cidade, descricao, preco, precoFinal, tamanho, quartos, banheiros }) => {
  return (
    <a 
    href="#" 
    className="p-3 bg-white  w-full h-[350px] flex flex-col roundedlg relative rounded-lg group">
      <div className="overflow-hidden">
        <div className="flex justify-between items-center rounded-lg font-bold gap-3 bg-white/60 
        absolute top-9 left-6 sm:left-10 p-2 z-20 group-hover:bg-white duration-500">
            <FaMap />
            <p>{cidade}</p>
        </div>
        <div>
            <img 
            src={imagem} 
            className="w-full h-[200px] object-cover rounded-md hover:scale-110 duration-500" 
            />
        </div>
      </div>
      <div className="pt-2">
        <div>
          <h2 className="font-bold text-lg">{descricao}</h2>
        </div>
        <div className="my-3">
          <p className="text-gray-500 line-through text-sm">{preco}</p>
          <p className="text-indigo-500 font-bold">{precoFinal}</p>
        </div>
        <div>
          <p className="text-gray-700 font-medium">
            {`${tamanho} - ${quartos} - ${banheiros}`}
          </p>
        </div>
      </div>
    </a>
  )
}

export default Card
