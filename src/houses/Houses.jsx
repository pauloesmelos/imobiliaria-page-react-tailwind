import React from 'react';
import Imagem1 from '../assets/1.jpg';
import Card from '../cards/Card';
import Imagem2 from '../assets/2.jpg';
import Imagem3 from '../assets/3.jpg';
import Imagem4 from '../assets/4.jpg';
import Imagem5 from '../assets/5.jpg';
import Imagem6 from '../assets/6.jpg';

const Houses = () => { 
  
  return (
    <main className="w-full pt-6 pb-36">
      <div className="px-5">
        <div className="flex justify-center sm:justify-between items-baseline">
            <h1 className="font-bold text-2xl sm:text-3xl">Compre ou alugue</h1>
            <p className="text-sm text-gray-500 hidden sm:flex">100 casas encontradas</p>
        </div>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-5 lg:grid-cols-3">
            <Card 
            cidade={"Campo Grande - MS"}
            imagem={Imagem1 }
            descricao={"Apartamento grande"}
            preco={"R$ 3.200/mês"}
            precoFinal={"R$ 3.000/mês"}
            tamanho={"100 mts"}
            quartos={"3 quartos"}
            banheiros={"2 banheiros"}
            />
            <Card 
            cidade={"Rio de Janeiro - RJ"}
            imagem={Imagem2 }
            descricao={"Apartamento praia"}
            preco={"R$ 5.200/mês"}
            precoFinal={"R$ 4.500/mês"}
            tamanho={"200 mts"}
            quartos={"4 quartos"}
            banheiros={"3 banheiros"}
            />
            <Card 
            cidade={"Rio Bonito - MT"}
            imagem={Imagem3 }
            descricao={"Apartamento luxo"}
            preco={"R$ 8.200/mês"}
            precoFinal={"R$ 6.000/mês"}
            tamanho={"400 mts"}
            quartos={"6 quartos"}
            banheiros={"4 banheiros"}
            />
            <Card 
            cidade={"São Paulo - SP"}
            imagem={Imagem4 }
            descricao={"Apartamento grande"}
            preco={"R$ 5.200/mês"}
            precoFinal={"R$ 5.000/mês"}
            tamanho={"300 mts"}
            quartos={"5 quartos"}
            banheiros={"3 banheiros"}
            />
            <Card 
            cidade={"Belo Horizonte - MG"}
            imagem={Imagem5 }
            descricao={"Apartamento médio"}
            preco={"R$ 4.200/mês"}
            precoFinal={"R$ 3.500/mês"}
            tamanho={"100 mts"}
            quartos={"3 quartos"}
            banheiros={"1 banheiros"}
            />
            <Card 
            cidade={"São Paulo - SP"}
            imagem={Imagem6 }
            descricao={"Apartamento luxo"}
            preco={"R$ 6.200/mês"}
            precoFinal={"R$ 6.000/mês"}
            tamanho={"500 mts"}
            quartos={"5 quartos"}
            banheiros={"4 banheiros"}
            />
            <Card 
            cidade={"Campo Grande - MS"}
            imagem={Imagem1 }
            descricao={"Apartamento grande"}
            preco={"R$ 3.200/mês"}
            precoFinal={"R$ 3.000/mês"}
            tamanho={"100 mts"}
            quartos={"3 quartos"}
            banheiros={"2 banheiros"}
            />
            <Card 
            cidade={"Rio de Janeiro - RJ"}
            imagem={Imagem2 }
            descricao={"Apartamento praia"}
            preco={"R$ 5.200/mês"}
            precoFinal={"R$ 4.500/mês"}
            tamanho={"200 mts"}
            quartos={"4 quartos"}
            banheiros={"3 banheiros"}
            />
            <Card 
            cidade={"Rio Bonito - MT"}
            imagem={Imagem3 }
            descricao={"Apartamento luxo"}
            preco={"R$ 8.200/mês"}
            precoFinal={"R$ 6.000/mês"}
            tamanho={"400 mts"}
            quartos={"6 quartos"}
            banheiros={"4 banheiros"}
            />
            <Card 
            cidade={"São Paulo - SP"}
            imagem={Imagem4 }
            descricao={"Apartamento grande"}
            preco={"R$ 5.200/mês"}
            precoFinal={"R$ 5.000/mês"}
            tamanho={"300 mts"}
            quartos={"5 quartos"}
            banheiros={"3 banheiros"}
            />
            <Card 
            cidade={"Belo Horizonte - MG"}
            imagem={Imagem5 }
            descricao={"Apartamento médio"}
            preco={"R$ 4.200/mês"}
            precoFinal={"R$ 3.500/mês"}
            tamanho={"100 mts"}
            quartos={"3 quartos"}
            banheiros={"1 banheiros"}
            />
            <Card 
            cidade={"São Paulo - SP"}
            imagem={Imagem6 }
            descricao={"Apartamento luxo"}
            preco={"R$ 6.200/mês"}
            precoFinal={"R$ 6.000/mês"}
            tamanho={"500 mts"}
            quartos={"5 quartos"}
            banheiros={"4 banheiros"}
            />
            <Card 
            cidade={"Belo Horizonte - MG"}
            imagem={Imagem5 }
            descricao={"Apartamento médio"}
            preco={"R$ 4.200/mês"}
            precoFinal={"R$ 3.500/mês"}
            tamanho={"100 mts"}
            quartos={"3 quartos"}
            banheiros={"1 banheiros"}
            />
        </div>
      </div>
    </main>
  )
}

export default Houses;