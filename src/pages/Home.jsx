import React, { useState, useEffect } from 'react';
import ProdutoCard from '../components/ProdutoCard';

const Home = () => {
  const [produtos, setProdutos] = useState([]);
  const [carregando, setCarregando] = useState(true);
  const [form, setForm] = useState({
    nome: '',
    preco: '',
    descricao: '',
    imagem: ''
  });

  useEffect(() => {
    setTimeout(() => {
      setProdutos([
        { nome: 'Camisa Southside', preco: 59.9, descricao: 'Camisa confortável', imagem: 'camisasouthside.jpg' },
        { nome: 'Faça sua Caneca', preco: 29.9, descricao: 'Caneca personalizada', imagem: 'canecapersonalizavel.jpg' }
      ]);
      setCarregando(false);
    }, 1000);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { nome, preco, descricao } = form;
    if (!nome || !preco || !descricao) return alert("Preencha os campos obrigatórios!");
    setProdutos([...produtos, form]);
    setForm({ nome: '', preco: '', descricao: '', imagem: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Catálogo de Produtos</h1>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-4 mb-8">
          <input className="border p-2 rounded" name="nome" placeholder="Nome" value={form.nome} onChange={handleChange} required />
          <input className="border p-2 rounded" name="preco" placeholder="Preço" type="number" value={form.preco} onChange={handleChange} required />
          <input className="border p-2 rounded" name="descricao" placeholder="Descrição" value={form.descricao} onChange={handleChange} required />
          <input className="border p-2 rounded" name="imagem" placeholder="URL da Imagem (opcional)" value={form.imagem} onChange={handleChange} />
          <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition" type="submit">
            Adicionar Produto
          </button>
        </form>

        {carregando ? (
          <p className="text-center text-gray-500">Carregando produtos...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {produtos.map((produto, index) => (
              <ProdutoCard key={index} {...produto} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;