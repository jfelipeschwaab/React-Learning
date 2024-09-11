//Codecademy Módulo 3
//1. React Components
/*
Aplicações React são feitas de componentes, mas o que é um componente?

Um componente é um pequeno e reutilizável trecho de código que é responsável
por um trabalho, que provavelmente será utilizado algumas repetidas vezes

Esse código irá criar um componente react:

import React from 'react';
import ReactDOM from 'react-dom/client';

function MyComponent() {
    return <h1>Hello world</h1>
}

ReactDOM.createRoot(
document.getElementById('app')).render(<MyComponent/>);
*/

//2. Import React
/*
É necessário sempre importar o React para o React funcionar
*/

//3. Import ReactDOM
/*
É importante também importar o ReactDOM
ex: import ReactDOM from 'react-dom/client';
*/

//4. Create a Function Component
/*
É bom pensar em componentes como pequenos pedaços da nossa interface. Combinados,
eles montam o bloco para fazer a aplicação React. Podemos criar um componente
com uma barra de pesquisa, navigation bar, dashboard, entre outros, uma 
infinidade de possibilidades

Podemos utilizar Funções JavaScript para definir um novo componente React



No passado, Componentes Reacts eram definidos usando classes JavaScript,
mas desde a introdução de Hooks, functions components são o padrão utilizado
em aplicações modernas React

ex:

import React from 'react';
function MyComponent() {
    return <h1>Hello, I'm a functional React Component!</h1>;
}

export default MyComponent


Definimos a função, e dentro da função, retornamos um elemento React 
com a sintaxe JSX

Combinados, eles são um Componente Funcional em React;
*/
import React from 'react';

// Declare a new function component
function myComponent() {

}

//5. Name a Functional Component
/*
Quando você declara um component, você precisa nomear esse componente

Nomes de componentes devem inicializar com Capitalização, ou seja, letra
maiúscula, e são criados com PascalCase, como JSX são compilados, Os com
ponentes devem iniciar com letra maiúscula para não confundir com elementos
padrões HTML
*/

function MyComponent() {

}


//6. Function Component Instructions
/*
1. Importe o React
2. Importe React-DOM
3. Escreva a função JavaScript, ou seja, o componente
4. Nomeie certamente o componente.
*/

import React from 'react';

function MyComponent() {
  return <h1>Hello, this is a function component body.</h1>;
}

//7. The Return Keyword in Functional Components
/*
Quando definimos um componente, nós definimos uma fábrica que consegue 
construir uma combinação de elementos toda vez que referenciamos seu nome.

Constroi-se baseado  nas instruções que você passa, bem parecido com funções
JavaScript

function Button() {
  // Instructions go here, between the curly braces.
}

Nossas instruções podem incluir combinados markups, CSS, Javascript para
produzir o resultado esperado. A única coisa que é obrigatória é o
RETURN

ex:

function BackButton() {
 return <button>Back To Home</button>;
}
*/
import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}

//8. Importing and Exporting React Components
/*
Aplicações React geralmente tem dois core files:

App.js
index.js

App.js é o top level da nossa aplicação
index.js é o entry point

Até agora, só definimos o componente dentro do App.js(codecademy), mas como
o index.js é o entry point, temos que exportá-lo para o index.js
para renderizar

Componentes em React são ótimos por que são reutilizáveis. Podemos manter
nossas peças de componente separadas, organizadas e reutilizáveis separando
os aruqivos e exportando-os para aonde precisar.

para exportá-los, prefixamos como a declaração export  e especificamos como
default ou named export. Nesse caso, continuaremos com default


Após a definição do componente, em App.js, podemos exportá-lo da seguinte
forma:

export default MyComponent;

e vamos para o index.js:

import MyComponent from './App';

*/

//App.js:
import React from 'react';

function MyComponent() {
  return <h1>Hello world</h1>;
}

export default MyComponent;

//index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';
import MyComponent from './App';

//9. Using and Rendering a Component
/*
Agora que definimos uma função Component, podemos utilizá-la

Usamo-os como uma sintaxe HTML:
<MyComponent />

se precisar identar outras tags dentro, vocÊ deve utilizar uma tag de abertura
e fechadura:
<MyComponent />
    <OtherComponent />
<MyComponent />

Mas, para renderizar o nosso componente para o browser, temos que utilizar
o .creaeRoot() e .render() methods de react-dom. Isso é feito no nosso
entry point, index.js

primeiro, chamamos o createRoot para criar um React root container para 
disponibilizar o conteúdo visível. Aplicações React geralmente tem um single
root DOM node, e tudo dentro dele é manuseado pelo React DOM.

Em outras palavras, damos ao createRoot() um elemento DOM para renderizar

ex:

ReactDOM.createRoot(document.getElementById('app));

após o root ser criado, resta apenas chamar o método render na root

ex:
ReactDOM.createRoot(document.getElementById('app').render(<MyComponent />));

*/

//index.js:
import React from 'react';
import ReactDOM from 'react-dom/client';

import MyComponent from './App';
ReactDOM.createRoot(document.getElementById('app').render(<MyComponent />));


