import React from 'react';


// // Mostre os dados da aplicação, como aprensetado no vídeo
// // Não utilize CSS externo, use o style para mudar as cores
// // Se a situação estiver ativa pinte de verde, inativa vermelho
// // Se o gasto for maior que 10000 mostre uma mensagem
const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Smartphone', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const aplicaEstiloSituacao = (status) => {
  let color = undefined;
  status === true ? color = 'green' : color = 'red';
  const estiloSituacao = {
    fontSize: '1.5rem',
    color: color,
  };
  return estiloSituacao;
}
const retornaStringSituacao = (status) => {
  let situacao = undefined;
  status === true ? situacao = 'Ativo' : situacao = 'Inativo';
  return situacao;
}
const mensagemMuitoGasto = (valorGasto) => {
  return valorGasto >= 10000 ? <p>Você está gastando muito!</p> : '';
}

const App = () => {
  const dados = mario;
  const totalGastoArray = dados.compras.map((item) => {
    return Number(item.preco.replace('R$ ', ''));
  });
  const totalGasto = totalGastoArray.reduce((prev, cur) => {
    return prev + cur;
  });

  return (
    <div className='cliente'>
      <p>
        Nome: {dados.cliente}
      </p>
      <p>
        Idade: {dados.idade}
      </p>
      <p>
        Situação: <span style={aplicaEstiloSituacao(dados.ativa)}>{retornaStringSituacao(dados.ativa)}</span>
      </p>
      <p>
        Total gasto: R$ {totalGasto}
      </p>
      {mensagemMuitoGasto(totalGasto)}
    </div>
  );
}

export default App;