import React from 'react';

const ProdutoCard = ({ nome, preco, descricao, imagem }) => {
  const imagemFinal = imagem?.startsWith('http')
    ? imagem
    : imagem
      ? new URL(`../assets/${imagem}`, import.meta.url).href
      : null;

  return (
    <div className="bg-white border rounded shadow p-4 flex flex-col gap-2">
      {imagemFinal && (
        <img src={imagemFinal} alt={nome} className="w-full h-40 object-cover rounded" />
      )}
      <h2 className="text-xl font-semibold text-blue-700">{nome}</h2>
      <p className="text-gray-700">{descricao}</p>
      <span className="text-green-600 font-bold">R$ {parseFloat(preco).toFixed(2)}</span>
    </div>
  );
};

export default ProdutoCard;