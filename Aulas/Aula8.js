//Módulo 8 Codecademy
//The effect Hook
//1. Function Components Effects

/*
O effect hook diz para o nosso componente o que fazer toda vez que é re-renderizado. Combinado com estados, podemos utilizar o 
Effect hook para criar dinâmicas interessantes para nossas webPages

Suponhamos que queremos permitir que o usuário modifique o título da webpage toda vez que ele digitar. Podemos implementar isso
com o Effect Hook useEffect()
EX:

import React, { useState, useEffect } from 'react';
 
function PageTitle() {
  const [name, setName] = useState('');
 
  useEffect(() => {
    document.title = `Hi, ${name}`;
  });
 
  return (
    <div>
      <p>Use the input field below to rename this page!</p>
      <input onChange={({target}) => setName(target.value)} value={name} type='text' />
    </div>
  );
}

a função useEffect não tem valor nenhum de retorno, já que o Effect Hook é utilizado para chamar outra função, Passamos a callback function, ou,
Effect, para rodar 

*/



//2. Clean Up Effects
/*
alguns effects necessitam de cleanup. Por exemplo, podemos adicionar event listeners para algum elemento no DOM. Quando adicionamos event listeners para o DOM
é importante remover esses eventos quando estivermos finalizados com ele

ex:

useEffect(()=>{
  document.addEventListener('keydown', handleKeyPress);
  // Specify how to clean up after the effect:
  return () => {
    document.removeEventListener('keydown', handleKeyPress);
  };
})


Se não retornassemos uma cleanup function, um novo event listener seria adicionado ao DOM's document toda vez que nosso 
componente re-renderizasse, mas isso poderia causar bugs

Por causa que effects rodam toda vez que renderizam e não apenas uma vez, o React chama nossa função cleanup toda vez antes de re-renderizar

Se nosso effect retornar uma função, o useEffect Hook irá tratar ela como a cleanup function, React irá chamar essa função antes do componente re-renderizar ou
se desmontar

é nossa responsabilidade retornar uma cleanup function, para evitar vazamentos de memória
*/

import React, { useState, useEffect } from 'react';

export default function Counter() {
  const [clickCount, setClickCount] = useState(0);

  // your code here
  const increment = () => setClickCount((prev) => prev+1);

  useEffect(() => {
    document.addEventListener('mousedown',increment);
    return () => {
      document.removeEventListener('mousedown', increment);
    }
  })
  

  return (
      <h1>Document Clicks: {clickCount}</h1>
  );
}

//3. Control When Effects Are Called
/*
a função useEffect() chama o seu primeiro argumento (o effect) toda vez depois que um componente se renderiza. Aprendemos como retornar uma cleanup function,
mas, as vezes, vamos querer pular o chamado do nosso effect na re-renderização.

É comum, quando definindo um componente, que rode um effect apenas quando o componente é montado (Renderizado a primeira vez), mas não quando o componente
re-renderiza. o Effect Hook deixa isso bem fácil para nós fazermos!, passamos um array vazio como um segundo argumento da função useEffect, esse segundo argumento
é chamado de dependency array.

O dependency array é usado para falar para o useEffect quando chamar nosso effect, e quando pular esse effect. Nosso effect sempre será chamado na primeira vez que o componente
for renderizado, mas é chamado novamente apenas se o valor do nosso dependency array for modificado
*/

import React, { useState, useEffect } from 'react';

export default function Timer() {
  const [time, setTime] = useState(0);
  const [name, setName] = useState("");


  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000)
    return () => {
      clearInterval(intervalId);
    }
  }, []);

  const handleChange = ({target}) => setName(target.value);



 return (
    <>
      <h1>Time: {time}</h1>
      <input value={name} onChange={handleChange} type='text' />
    </>
  );

}



