import React from 'react';

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

const App = () => {
  const transformaEmNumero = (precoString) => {
    return Number(precoString.replace('R$ ',  ''));
  };
  const aplicaEstilo = (cor) => {
    let corBackground = {
      color: 'white',
      background: cor
    }
    return corBackground
  };
  
  return (
    <section>
      <ul>{produtos.filter(({preco}) => {
        return transformaEmNumero(preco) > 1500;
      }).map(({id, nome, preco, cores}) => {
        return (
          <li>
            <h2>{nome}</h2>
            <p>Preço: {preco}</p>
            <ul>{cores.map((cor) => {
              return (
                <li style={aplicaEstilo(cor)}>{cor}</li>
              )
            })}</ul>
          </li>
        )
      })}</ul>
    </section>
  );
};

export default App;