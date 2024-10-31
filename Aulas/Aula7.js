//Módulo 7 CodeCademy
//1. Why use Hooks?
/*
E se quisessemos adicionar um estado para nosso componente? se quisessemos que nosso app respondesse
à mudanças de dados?

Nessa lição, aprenderemos sobre React Hooks e como eles podem nos ajudar.

React Hooks, são funções que nos permitem manusear o estado interno dos componentes e pós-renderizar efeitos
diretamente da nossa function Component. Usando hooks, podemos determinar o que nós queremos mostrar para o usuário
declarando como nossa interface deve estar baseada no estado.

React oferece muitos hooks built-in. Um desses são:
useState(), useEffect(), useContext(), useReducer(), userRef()

aprenderemos como:

-Criar uma função 'stateful'
-Usar o State Hook
-Inicializar um estado e setar um estado
-Definir event handlers
-Use state setter callback functions
-Use state with arrays e objects

*/

//2. Update Function Component State
/*
Vamos começar com o Stae hook, o Hook mais comum na hora de criar componentes React. O State Hook é um export da biblioteca React, então
temos que importá-lo da seguinte maneira:

import React, { useState } from 'react';

quando chamamos a função useState(), ela retorna um array com dois valores:

1. O valor atual desse estado
2. State Setter: Uma função que utilizamos para atualizar o valor desse estado

Podemos usar esses dois valores para trackear o estado atual de um valor, e trocá-lo quando necessário. para utilizar essa estrutura, 
assinala-mos eles para variáveis locais usando destruturação de array:

const [currentState, setCurrentState] = useState();

ex:

import React, { useState } from "react";

function Toggle() {
  const [toggle, setToggle] = useState();

  return (
    <div>
      <p>The toggle is {toggle}</p>
      <button onClick={() => setToggle("On")}>On</button>
      <button onClick={() => setToggle("Off")}>Off</button>
    </div>
  );
}

Note como nossa função setter é chamada pelo onClick event listener. Para atualizar o valor de toggle e re-renderizar o componente com o novo
valor, tudo que precisamos fazer é chamar o setToggle() com o próximo valor como argumento.

Com o State Hook, atualizar o estado de algo é apenas chamar uma setter function
*/
// import the default export and the named export `useState` from the 'react' library
import React, { useState } from "react";

export default function ColorPicker() {
const [color, setColor] = useState();
 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>The color is {color}</p>
      <button onClick={() => setColor("Aquamarine")}>
        Aquamarine
      </button>
      <button onClick={() => setColor("BlueViolet")}>
        BlueViolet
      </button>
      <button onClick={() => setColor("Chartreuse")}>
        Chartreuse
      </button>
      <button onClick={() => setColor("CornflowerBlue")}>
        CornflowerBlue
      </button>
    </div>
  );
}

//3. Initialize State
/*
Podemos utilizar o state Hook para manusear valores de qualquer tipo primitivo e até coleções de dados como arrays e objetos
ex:

import React, { useState } from 'react';

function ToggleLoading() {
  const [isLoading, setIsLoading] = useState();

  return (
    <div>
      <p>The data is {isLoading ? 'Loading' : 'Not Loading'}</p>
      <button onClick={() => setIsLoading(true)}>
        Turn Loading On
      </button>
      <button onClick={() => setIsLoading(false)}>
        Turn Loading Off
      </button>
    </div>
  );
}

Esse código trata com valores booleanos, mas e se quisessemos que nosso componente startasse com o valor setado para true?

para inicializar o nosso estado com qualquer valor que quisessemos, simplesmente passamos o valor inicial dentro da função do useState()
ex:

const [isLoading, setIsLoading] = useState(true);

*/

import React, { useState } from 'react';

const colorNames = ['Aquamarine', 'BlueViolet', 'Chartreuse', 'CornflowerBlue', 'Thistle', 'SpringGreen', 'SaddleBrown', 'PapayaWhip', 'MistyRose'];

export default function ColorPicker() {
  const [color, setColor] = useState("Tomato");

 const divStyle = {backgroundColor: color};

  return (
    <div style={divStyle}>
      <p>Selected color: {color}</p>
      {colorNames.map((colorName)=>(
        <button 
          onClick={() => setColor(colorName)} 
          key={colorName}>
       	     {colorName}
      	</button>
      ))}
    </div>
  );
}

//4. Use State Setter Outside of JSX
/*
*É uma convenção começar com o valor da setter function, nomear com um 'set' como prefixo

ex: const [email, setEmail] = useState()

Muitas vezes vamos precisar setar a lógica do nosso useState() fora da escrita JSX, para podermos lidar com estados mais complexos
*/

import React, { useState } from 'react';

const validPhoneNumber = /^\d{1,10}$/;

export default function PhoneNumber() {
  const [phone, setPhone] = useState('');

  const handleChange = ({ target })=> {
    const newPhone = target.value;
    const isValid = validPhoneNumber.test(newPhone);
    if (isValid) {
      setPhone(newPhone);
    }
  };

  return (
    <div className='phone'>
      <label for='phone-input'>Phone: </label>
      <input id='phone-input' value={phone} onChange={handleChange} />
    </div>
  );
}

//5. Set From Previous State
/*
Aprendemos que podemos setar o valor do estado inicialmente

Entretanto, React states updates são assíncronos. Isso signifca que há alguns cenários em que porções do seu código irá rodar antes que o
estado termine de atualizar

Isso é bom e ruim! Agrupar os updates de estado pode dar um improve na performance da sua aplicação, mas pode resultar em valores não
queridos. Consequentemente, a melhor prática é atualizar um estado com uma callback Function, para evitar valores não desejados

eX:

import React, { useState } from 'react';
 
export default function Counter() {
  const [count, setCount] = useState(0);
 
  const increment = () => setCount(prevCount => prevCount + 1);
 
  return (
    <div>
      <p>Wow, you've clicked that button: {count} times</p>
      <button onClick={increment}>Click here!</button>
    </div>
  );
}

Aqui, quando o botão é acionado, o increment() event handler é chamado. Dentro dessa função, usamos o setCount() state setter com uma 
callback Function

Por causa que o próximo valor depende do anterior, passamos uma callback function ao invés de um valor 

ex:
  const increment = () => setCount(prevCount => prevCount + 1);


Quando o state setter chama essa função callback, o state setter pega nosso valor antigo de 'count' como argumento, e o valor retornado
por esse state setter callback function é usado para definir o próximo valor;


*/

import React, { useState } from 'react';

export default function QuizNavBar({ questions }) {
  const [questionIndex, setQuestionIndex] = useState(0);

  // define event handlers 
  const goBack = () => {
    setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1);
  }

  const goToNext = () => {
    setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1);
  }

  // determine if on the first question or not
  const onFirstQuestion = questionIndex === 0 ? true : false


  const onLastQuestion = questionIndex === questions.length - 1;

  return (
    <nav>
      <span>Question #{questionIndex + 1}</span>
      <div>
        <button disabled={onFirstQuestion} onClick={goBack}>
          Go Back
        </button>
        <button disabled={onLastQuestion} onClick={goToNext}>
          Next Question
        </button>
      </div>
    </nav>
  );
}

//6. Arrays in State
/*
JS arrays são o melhor modelo para manusear e renderizar JSX lists.

ex:
import React, { useState } from 'react';

//Static array of pizza options offered. 
const options = ['Bell Pepper', 'Sausage', 'Pepperoni', 'Pineapple'];

export default function PersonalPizza() {
  const [selected, setSelected] = useState([]);

  const toggleTopping = ({target}) => {
    const clickedTopping = target.value;
    setSelected((prev) => {
     // check if clicked topping is already selected
      if (prev.includes(clickedTopping)) {
        // filter the clicked topping out of state
        return prev.filter(t => t !== clickedTopping);
      } else {
        // add the clicked topping to our state
        return [clickedTopping, ...prev];
      }
    });
  };

  return (
    <div>
      {options.map(option => (
        <button value={option} onClick={toggleTopping} key={option}>
          {selected.includes(option) ? 'Remove ' : 'Add '}
          {option}
        </button>
      ))}
      <p>Order a {selected.join(', ')} pizza</p>
    </div>
  );
}


No exemplo acima, estamos utilizando 2 arrays, array option, e array, select, option contém nome dos toppings de pizzas, e selected
representa os toppings selecionados

o array options, contém data estática, ou seja, não irá mudar. A melhor prática é defini-los fora das functions components já que eles
não precisam er recreados toda vez que nosso componente re-renderiza. em JSX, usamos o JS .map() para renderizar um botão para cada recheio
de nossas options

o selected array contém dados dinâmicos, significando que pode mudar, usualmente baseado no valor que o usuário quer, baseado em suas ações.
Inicializamos  o array de selected como vazio, quando um botão é clicado, o toggleTopping() event handler é chamado, note como o event
handler utiliza informações do event object para determinar qual topping foi selecionado

Quando atualizamos um array em estado, nós não apenas adicionamos o novo dado ao array antigo. Nós recriamos o array com um array novo.
Isso significa que informações antigas precisam ser explicitamente copiadas para o novo array

isso que a spread syntax faz por nos: ...prev
*/

import React, { useState } from "react";
import ItemList from "./ItemList";
import { produce, pantryItems } from "./storeItems";

export default function GroceryCart() {
  // declare and initialize state 
  const [cart, setCart] = useState([]);

  const addItem = (item) => {
    setCart(prev => [item, ...prev])
 
   };

  const removeItem = (targetIndex) => {
    setCart((prev) => {
        return prev.filter((item, index) => index !== targetIndex);
    })
  };

  return (
    <div>
      <h1>Grocery Cart</h1>
      <ul>
        {cart.map((item, index) => (
          <li onClick={() => removeItem(index)} key={index}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Produce</h2>
      <ItemList items={produce} onItemClick={addItem} />
      <h2>Pantry Items</h2>
      <ItemList items={pantryItems} onItemClick={addItem} />
    </div>
  );
}






