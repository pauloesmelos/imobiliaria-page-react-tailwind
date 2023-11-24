import React from 'react';
import Imagem1 from '../assets/1.jpg';
import Card from '../cards/Card';

const Houses = () => { 
    /**
     *import Imagem2 from '../assets/2.jpg';
    import Imagem3 from '../assets/3.jpg';
    import Imagem4 from '../assets/4.jpg';
    import Imagem5 from '../assets/5.jpg';
    import Imagem6 from '../assets/6.jpg';
     */
  return (
    <main className="w-full pt-6">
      <div className="px-5">
        <div className="flex justify-center sm:justify-between items-baseline">
            <h1 className="font-bold text-2xl sm:text-3xl">Compre ou alugue</h1>
            <p className="text-sm text-gray-500 hidden sm:flex">100 casas encontradas</p>
        </div>
        <div className="mt-8">
            <Card 
            cidade={"Campo Grande - MS"}
            imagem={Imagem1 }
            descricao={"Apartamento grande"}
            />
        </div>
      </div>
    </main>
  )
}

export default Houses;