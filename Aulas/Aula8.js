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


//4. Fetch Data
/*
Aprendemos que um padrão de comportamento comjum é chamar a effect function
toda vez que renderizar

Depois, aprendemos que podemos passar um array vazio como segundo argumento
do useEffect() se quisermos chamar o useEffect apenas na montagem do componente

Neste exercício, aprenderemos a usar o dependecy array para configurar 
exatamente quando quisermos que nosso efeito seja chamado

Quando nosso effect é responsável por ''fetch data'' de um server, demos
atenção exttra pra quando nosso effect será chamado. Chamadas desnecessárias
podem custar em termos de:

- Processamento
- Performance
- Uso de memória para mobile
- API Service piorado

Quando os dados que nosso componente precisa renderizar não muda, podemos
passar um empty array dependecy, que os dados serão renderizados após a
primeira renderização. Quando a resposta é recebida do servidor, podemos
utilizar o state setter do State Hook para guardar dados da resposta localmente
no nosso componente para futuras renderizações

Usando o State Hook e Effect Hook juntos é uma maneira poderosa que salva
nosso componente de fetch dados desnecessários toda vez após uma renderização

Um empty dependency array sinaliza para o nosso Effect Hook que nosso effect
não necessita de retrabalho, ou seja, não depende de nada. Especificar zero
dependências significa que o resultado de rodar esse effect não irá mudar
e chamar nosso effect apenas uma vez é suficiente.

Um dependency array que não está vazio indica para nosso Effect Hook que ele
pode continuar pulando chamadas até que o valor de uma das variáveis do nosso
dependency array tenha mudado. Se o valor tiver mudado, o effect Hook chamará
nosso effect novamente!
*/



import React, { useState, useEffect } from "react";
import { get } from './mockBackend/fetch';

export default function Forecast() {
  const [data, setData] = useState();
  const [notes, setNotes] = useState({});
  const [forecastType, setForecastType] = useState('/daily');

  useEffect(() => {
    alert('Requested data from server...');
    get(forecastType).then((response) => {
      alert('Response: ' + JSON.stringify(response,'',2));
      setData(response.data);
    });
  }, [forecastType]);

  const handleChange = (index) => ({ target }) =>
    setNotes((prev) => ({
      ...prev,
      [index]: target.value
    }));

  return (
    <div className='App'>
      <h1>My Weather Planner</h1>
      <div>
        <button onClick={() => setForecastType('/daily')}>5-day</button>
        <button onClick={() => setForecastType('/hourly')}>Today</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Summary</th>
            <th>Avg Temp</th>
            <th>Precip</th>
            <th>Notes</th>
          </tr>
        </thead>
        <tbody>
          {data ? data.map((item, i) => (
            <tr key={item.id}>
              <td>{item.summary}</td>
              <td> {item.temp.avg}°F</td>
              <td>{item.precip}%</td>
              <td>
                <input
                  value={notes[item.id] || ''}
                  onChange={handleChange(item.id)}
                />
              </td>
            </tr>
          )) : <p>Loading...</p>}
        </tbody>
      </table>
    </div>
  );
}


//5. Rules of Hooks
/*
Há duas regras para se deixar na mente quando usando Hooks:

1. Apenas chame Hooks no top level
2. Apenas chame Hooks de funções React


Quando o React builda o Virtual DOM, a library chama a função que define
nosso componente de novo e de novo, por isso é importante deixar nossos
Hooks no top level, nunca chamamos Hooks dentro de loops, condições ou
nested functions


*/
import React, { useState, useEffect } from 'react';
import { get } from './mockBackend/fetch';

export default function Shop() {
  const [categories, setCategories] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [items, setItems] = useState({});

    useEffect(() => {
      get('/categories').then((response) => {
        setCategories(response.data);
      });
    }, []);
  

useEffect(() => {
    if (selectedCategory && !items[selectedCategory]) {

      get(`/items?category=${selectedCategory}`).then((response) => {
        setItems((prev) => ({ ...prev, [selectedCategory]: response.data }));
      });
    }}, [items, selectedCategory ]);

  return (
    <div className='App'>
      <h1>Clothes 'n Things</h1>
      <nav>
        {categories.map((category) => (
          <button key={category} onClick={() => setSelectedCategory(category)}>
            {category}
          </button>
        ))}
      </nav>
      <h2>{selectedCategory}</h2>
      <ul>
        {!items[selectedCategory]
          ? null
          : items[selectedCategory].map((item) => <li key={item}>{item}</li>)}
      </ul>
    </div>
  );
}

