//Módulo 2 Codecademy
//1. class vs className
/*
A gramática em JSX é quase a mesma de html, mas há algumas diferenças 
a se preocupar.

em html, é comum utilizar class como um atributo

em JSX, você não pode usar a palavra class, você deve utilizar className
ex:
<h1 className="big">Title</h1>

Isso ocorre porquê JSX é traduzido em JavaScript, e class é uma palavra
reservada em JavaScript
*/
import React from 'react';
import { createRoot } from 'react-dom/client'

const container = document.getElementById('app');
const root = createRoot(container);
// Write code here:
const myDiv = <div className="big">I AM A BIG DIV</div>
root.render(myDiv)

//2. Self-Closing Tags
/*
Outro erro comum envolve tags que se auto-fecham

Muitos elementos HTML utilizam duas tags, uma de abertura e outra de fechadura
mas alguns elementos como <img> e <input> utilizam apenas uma tag

Quando você escreve uma self-closing tag em HTML, é opcional colocar a /
ou não

mas em JSX, você DEVE incluir essa barra. Se você escrever uma self-closing
tag em JSX e esquecer da barra, vai te retornar um erro.

ex: 
<br/> FINE
<br> NOT FINE
*/

//3. JavaScript in Your JSX in Your Javascript
/*
Até agora, focamos em escrever expressões JSX. É semelhante à HTML, mas
dentro de um file JavaScript

Nessa lição, aprenderemos como adicionar comandos Javascript dentro de
uma expressão JSX, escrita dentro de um arquivo JSX
*/
root.render(<h1>2 + 3</h1>); //OUTPUTS '2 + 3'

//4. Curly Braces in JSX
/*
O código não funcionou como o esperado. Ao invés de adicionar 2+3, apenas
printou na tela 2+3

para isso, precisamos identificar que o que estamos colocando nas expressões
JSX é código JavaScript, para isso, utilizamos chaves
*/
root.render(<h1>{2 + 3}</h1>); //OUTPUTS '5'


//5. 20 Digits of PI in JSX
//EXERCISE
const math = <h1>2+3 = 2+3</h1>
math = <h1>2+3 = {2+3}</h1>
root.render(math);


//6. Variables in JSX
/*
Você consegue utilizar variáveis assim como no JavaScript convencional
consegue-se acessar varíaveis globais dentro de expressões JSX
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container2 = document.getElementById('app');
const root2 = createRoot(container2);

const theBestString = 'This text was accessed through a javascript variable';

root2.render(<h1>{theBestString}</h1>);


//7. Variables Attributes in JSX
/*
Quando escrevendo JSX, é comum utilizar variáveis para setar atributos

ex:
const sideLength = "200px";

const panda = (
  <img 
    src="images/panda.jpg" 
    alt="panda" 
    height={sideLength} 
    width={sideLength} />
);

Propriedades de objetos também são utilizados para setar atributos

ex:

const pics = {
  panda: "http://bit.ly/1Tqltv5",
  owl: "http://bit.ly/1XGtkM3",
  owlCat: "http://bit.ly/1Upbczi"
}; 

const panda = (
  <img 
    src={pics.panda} 
    alt="Lazy Panda" />
);

const owl = (
  <img 
    src={pics.owl} 
    alt="Unimpressed Owl" />
);

const owlCat = (
  <img 
    src={pics.owlCat} 
    alt="Ghastly Abomination" />
); 
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container3 = document.getElementById('app');
const root3 = createRoot(container3);
const goose = 'https://content.codecademy.com/courses/React/react_photo-goose.jpg';

// Declare new variable here:
const gooseImg = <img src={goose}/>
root3.render(gooseImg)


//8. Event Listeners in JSX
/*
JSX elements podem ter listeners, assim como elementos HTML podem ter

Programar com React significa constantemente trabalhar com event listeners

você pode criar um event listener dando à um elemento JSX um atributo especial
ex:

<img onClick={clickAlert} />

link com todos os commons components: https://react.dev/reference/react-dom/components/common#

o valor do atributo deve ser uma função
ex:

function clickAlert() {
    alert('You clicked this image!');
}

<img onClick={clickAlert} />


Note que listeners names em HTML são todos escritos em caixa baixa, 
ex: 
onclick, onmouseover

Em JSX, todos são escritos em camelCase
onClick, onMouseOver
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container4 = document.getElementById('app');
const root4 = createRoot(container4);
function makeDoggy(e) {
  e.target.setAttribute('src', 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg');
  e.target.setAttribute('alt', 'doggy');
}

const kitty = (
	<img 
		src="https://content.codecademy.com/courses/React/react_photo-kitty.jpg" 
		alt="kitty"
    onClick={makeDoggy}
     />
);

root4.render(kitty);

//9. JSX Conditionals: If Statements That Don't Work
/*
Aqui está uma regra que é necessário saber: Você não pode injetar um
if statement em uma expressão JSX

esse código irá quebrar:

(
  <h1>
    {
      if (purchase.complete) {
        'Thank you for placing an order!'
      }
    }
  </h1>
)
*/

//10. JSX Conditionals: If statements That Do Work
/*
Bom, como escrever uma conditional se você não pode injetar uma conditional?

Uma opção é escrever o if statement, não injetá-lo

ex: 

if (user.age >= drinkingAge) {
  message = (
    <h1>
      Hey, check out this alcoholic beverage!
    </h1>
  );
} else {
  message = (
    <h1>
      Hey, check out these earrings I got at Claire's!
    </h1>
  );


Dessa forma é funcional pois as palavras chaves if e else não estão dentro
do elemento JSX
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container5 = document.getElementById('app');
const root5 = createRoot(container5);
function coinToss() {
  // This function will randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};
let img;

// if/else statement begins here:
if(coinToss() === 'heads'){
    img = <img src={pics.kitty}/>
}else{
    img = <img src={pics.doggy}/>
}

root5.render(img);

//11. JSX Conditionals: The Ternary Operator
/*
O ternary Operator funciona da mesma forma em React que o JavaScript funciona

Como deve-se usar uma ternary operation em uma expressão JSX:
const headline = (
  <h1>
    { age >= drinkingAge ? 'Buy Drink' : 'Do Teen Stuff' }
  </h1>
);

*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const container6 = document.getElementById('app');
const root6 = createRoot(container6);
function coinToss () {
  // Randomly return either 'heads' or 'tails'.
  return Math.random() < 0.5 ? 'heads' : 'tails';
}

const pics2 = {
  kitty: 'https://content.codecademy.com/courses/React/react_photo-kitty.jpg',
  doggy: 'https://content.codecademy.com/courses/React/react_photo-puppy.jpeg'
};

const img2 = <img src={pics2[coinToss() === 'heads' ? 'kitty' : 'doggy']} />;

root6.render(img2);

//12. JSX Conditionals: &&
/*
Ultima forma de condicional: &&

Assim como o ternary-operator, && não é próprio do React, mas aparece
constantemente

&& funciona para condições que irão fazer uma ação, mas outras vezes, não

ex: 

const tasty = (
  <ul>
    <li>Applesauce</li>
    { !baby && <li>Pizza</li> }
    { age > 15 && <li>Brussels Sprouts</li> }
    { age > 20 && <li>Oysters</li> }
    { age > 25 && <li>Grappa</li> }
  </ul>
);

Se a expressão na esquerda for true, só então o JSX da direta será 
renderizado
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

// judgmental will be true half the time.
const judgmental = Math.random() < 0.5;

const favoriteFoods = (
  <div>
    <h1>My Favorite Foods</h1>
    <ul>
      <li>Sushi Burrito</li>
      <li>Rhubarb Pie</li>
      { !judgmental && <li>Nacho Cheez Straight Out The Jar</li>}
      <li>Broiled Grapefruit</li>
    </ul>
  </div>
);

root.render(favoriteFoods);

//13. .map in JSX
/*
o array method .map é MUITO utilizado em React. é um bom hábito usá-lo 
ao longo do desenvolvimento JSX

Se você quiser criar uma lista de elementos JSX, usar .map é a maneira
mais eficiente
ex:

const strings = ['Home', 'Shop', 'About me'];

const listItems = strings.map(string => <li>{string}</li>)
<ul>{listItems}</ul>
*/
import React from 'react';
import { createRoot } from 'react-dom/client';

const people = ['Rowe', 'Prevost', 'Gare'];

const peopleList = people.map((person) =>
  <li>{person}</li>
);

root.render(<ul>{peopleList}</ul>);

//14. Keys
/*
Quando você faz uma lista em JSX, as vezes sua lista terá que incluir
algo chamado keys

ex:

<ul>
  <li key="li-01">Example1</li>
  <li key="li-02">Example2</li>
  <li key="li-03">Example3</li>
</ul>

key é um atributo JSX. o nome é key. O valor desse atributo deve ser único
assim como um id

keys não fazem nada visualmente, React utiliza-as para internamente guardar
as informações das listas.

Se você não utiliza keys, você deveria, React pode cagar com sua ordem 
da lista 

Nem todas as listas devem ter keys. Uma lista deve ter keys se uma das
seguintes proposições forem verdadeiras:

1. A lista tem memoria guardada de um render passado. por exemplo, um to-do
list, cada membro deve-se lembrar se foi checkado ou não

2. A ordem de uma lista for embaralhada. Como por exemplo, uma pesquisa, os
resultados devem ser embaralhos de um render ao outro.

Se nenhuma dessas condições for verdadeiras, você não necessita de utilizar
keys
*/

//15. React.createElement
/* 
Você consegue escrever React code sem utilizar JSX

A maioria utiliza JSX, mas você deve entender que é possível escrever
código react sem utilizá-lo

a seguinte JSX expression:
const h1 = <h1>Hello world</h1>;

pode ser rescrita da seguinte forma:

const h1 = React.createElement(
    "h1",
    null,
    "Hello world"
)
*/
const greatestDivEver = React.createElement(
    "div",
    null,
    "i am a div"
  );