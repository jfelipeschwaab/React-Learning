//Módulo 6 Codecademy
//1. props
/*
Quando pensamos no frame da aplicação React, componentes são apenas um 
pequeno pedaço de um todo. Juntos, eles montam a interface que o usuário
vê

Com cada componente desempenhando uma função na interface, vão ter vezes
que o componente tem que comunicar-se com outros componentes

Nessa lição, você irá aprender outra maneira que componentes podem interagiR:
Um componente passar informação à outro componente.

Informações que passam de um componente para outro, é conhecida como props

props pode ser utilizada para customizar o output de cada componente dependendo
da informação passado.

Ao componentes se comunicarem uns com os outros, adicionamos um level de
flexibilidade que antes não era possível
*/

//2. Acess a Component's props
/*
Todo componente tem algo chamado props, um props é um objeto, contém informação
sobre aquele componente

Você já viu isso! mas você não deve ter visualizado! Vamos ver um botão
HTML. Há diversos tipos de informações que podemos passar para o botão, como
o type do button

ex:
<button type="submit" value="Submit"> Submit </button> 

Nesse exemplo, passamos dois pedaços de informações ao botão, um type e um
value. Dependendo de qual type demos ao botão, será tratado de forma diferente.
Da mesma forma, podemos passar informação para nossos próprios componentes
para especificar como eles agirão

Props servem da mesma maneira para componentes que argumentos servem 
para funções

Para acessar um component's props object, você referência o props object e
utiliza dot notation para suas propriedades. Exemplo:

props.name

Isso nos retornaria o nome da propriedade do props object.
*/

//PropsDisplayer.js:
import React from 'react';

function PropsDisplayer(props) {
  const stringProps = JSON.stringify(props);
  return (
    <div>
      <h1>CHECK OUT MY PROPS OBJECT</h1>
      <h2>{stringProps}</h2>
    </div>
  );
}

export default PropsDisplayer;

//App.js:
import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return (
    <PropsDisplayer/>
  )
}

// export default App;



//3. Pass 'props' to a Component
/*
Para tirar vantagem do props, precisamos passar informação para um componente
React. No exercício anterior, renderizamos um props object vazio, pois, não
passamos nenhuma props para nosso PropsDisplayer 

Como passamos props?:
Dando à um componente um atributo.

ex:
<Greeting name="Jamel" />


Vamos dizer que você queira passar à um componente a mensagem "We're great!"
Você pode fazer assim:

<SloganDisplay message="We're great" />


Como você pôde ver, para passar informação à um componente, precisamos 
de um nome para a informação que você vai passar, no exemplo acima, utilizamos
message. Você pode utilizar qualquer nome que você quiser

Se você quiser passar informação que não seja uma string, você envolve a
informação em chaves:

<Greeting myInfo={["Astronaut", "Narek", "34"]} />

No próximo exemplo, passaremos diversas informações ao Greeting:

<Greeting name="The Queen Mary" city="Long Beach, California" 
age={56} haunted={true} />

*/

import React from 'react';
import ReactDOM from 'react-dom';

import PropsDisplayer from './PropsDisplayer';

function App() {
  return <PropsDisplayer myProp="Hello"/>;
}

// export default App;


//4. Render a Component's props
/*
Props nos permite customizar o componente ao passar informação

Aprendemos a como passar informação. Mas você vai querer mostrar a 
informação que você passar.

Para ter certeza que uma function component pode utilizar o props object,
apenas defina seu componente com props como parâmetro.

ex:

function Button(props) {
    return <button>{props.displayText}</button>;
}

No exemplo acima, props é aceito como parâmetro, e os object values são
acessados com dot notation (object.propertyName).

Alternativamente, já que props é um objeto, vpcê pode usar destructuring
syntax.

Ex:
function Button({displayText}) {
  return <button>{displayText}</button>;
}
*/
import React from 'react';

function Product(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <h2>{props.price}</h2>
      <h3>{props.rating}</h3>
    </div>       
  );
}

// export default Product;


//5. Pass props From Component To Component
/*
Você aprendeu como passar um prop para um componente:
<Greeting firstName="Esmeralda" />

Mas o uso mais comum de props é passar informação de um componente para
outro componente diferente.

Props em React trafega em one-way direction, de cima pra baixo, parent
to child

Vamos explorar o parent-child relationship de passar props mais à frente

Ex:
function App() {
    return <Product name="Apple Watch" price = {399} rating = "4.5/5.0" />;
}

Nesse exemplo, App é o parent e Product é o child. App passa 3 props
para o Product, name, price e rating, Que pode ser lido dentro do child
componen

Props passados para baixo são imutáveis, ou seja, não podem ser mudados,
Se outro componente necessita de informações adicionais, o parent precisa
passar essas novas informações adicionais.
*/

//Player.js:
import React from 'react';

function Player(props) {
  return (
    <>
      <h1>{props.songName}</h1>
      <h2>{props.artist}</h2>
    </>
  );
}

// export default Player;

//App.js:
import React from 'react';
import Player from './Player';

function App() {
  return <Player songName="Yellow" artist="ColdPlay"/>
}

// export default App;

//6. Render Different UI Based on props
/*
Você pode fazer muito mais com props do que só mostra-los. Você pode
utilizar os props para fazer decisões

ex:
function LoginMsg(props) {
  if (props.password === 'a-tough-password') {
    return <h2>Sign In Successful.</h2>
  } else {
    return <h2>Sign In Failed..</h2>
  }
}

*/

//Greeting.js:
import React from 'react';

function Greeting(props) {
  if (props.signedIn === false) {
    return <h1>Please login.</h1>;
  } else {
    return (
      <>
        <h1>Welcome back, {props.name}!</h1>
        <article>
          Latest Movie: A Computer Bug's Life
        </article>
      </>
    )
  }
}

// export default Greeting;

//7. Put an Event Handler in a Function Component
/*
Você pode, e irá passar, funções como props. é especialmente comum passar
event handlers como props.

Primeiro, temos que definir um event handler antes de passá-lo para 
qualquer local. Nesse exercício, vamos definir um event handler

como definimos um event handler em React? 
Definimos um event handler como um method no componente

ex:
import React from 'react';

function Example() {
  function handleEvent() {
    alert(`I am an event handler.
      If you see this message,
      then I have been called.`);
  }
  return (
      <h1 onClick={handleEvent}>
        Hello world
      </h1>
    );
}
*/
import React from 'react';
import Button from './Button';



function Talker() {
  function talk() {
  let speech = '';
  for (let i = 0; i < 10000; i++) {
    speech += 'blah ';
  }
  alert(speech);
}
  return <Button />;
}

// export default Talker;


//8. Pass an Event Handler as a prop
import React from 'react';
import Button from './Button';

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>;
}

// export default Talker;

//9. Receive an Event handler as prop
/*
Passamos a função de Talker para o Button

Como utilizá-la? Temos que passar para nosso Button, o props e seu event
handler
*/
import React from 'react';

function Button(props) {
  return (
    <button onClick={props.talk}>
      Click me!
    </button>
  );
}

// export default Button;

//10. handleEVent, onEvent, and props.onEvent
/*
Vamos falar sobre nomear coisas

Quando você passa um event handler como um prop, assim como fizemos, há
dois nomes que você deve escolher. Os dois nomes são definidos no Parent
Component, O componente que define o event Handler e o passa.

O primeiro nome que você deve escolher é o nome do event handler itself

ex:

function Talker() {
  function talk() {
    let speech = '';
    for (let i = 0; i < 10000; i++) {
      speech += 'blah ';
    }
    alert(speech);
	}
  return <Button talk={talk}/>;
}

nosso event Handler chama-se talk

O segundo nome que você deve escolher, é o nome do prop que você irá usar
para passar o event handler

para nosso prop name, escolhemos talk também
  return <Button talk={talk}/>;

Esses dois nomes podem ser o que quisermos. Entretanto, há uma convenção
que é comumente utilizada.

Assim que ela funciona: primeiro, pense em qual tipo de evento você está
''escutando'', no nosso exemplo, o event type era "click". Se você está
fazendo um event handler para um click, você nomeia seu event handler como:
handleClick, se você está fazendo para um hover, você o nomeia handleHover

ex:

function myClass() {
  function handleHover() {
    alert('I am an event handler.');
    alert('I will be called in response to "hover" events.');
  }
}

O seu prop Name deve ser a palavra "on" + o "type" do se event. ex:
onClick
onHover

**NOTE QUE**
se eu coloco um onClick em um Componente JSX, ele não atribui um event
handler, diferentemente se eu o atribuo em um elemento HTML

<button onClick="bla"> != <MyButton onClick={eventHandler} />
*/


//11. props.children
/*
Todo props object de um Componente tem uma propriedade chamada "children"
props.children irá retornar tudo entre a tag de abertura e fechadura
da tag JSX

Até então, todos os componentes que vimos foram self-closing tags, ou seja,
tags que se auto-fecham. Mas pásmem, Elas não precisam ser self-closing!
Você poderia muito bem escrever <MyFunctionComponent> <MyFunctionComponent/>
e mesmo assim funcionaria

props.children irá retornar tudo entre <MyFunctionComponent> <MyFunctionComponent/>
Usando o props.children, podemos separar o outer component, que nesse caso
é o MyFunctionComponent, do conteúdo, o que o faz flexível e reutilizável.

// Example 1
<BigButton>
  I am a child of BigButton.
</BigButton>

Aqui, props.children nos retornaria 'I am a child of BigButton'


// Example 2
<BigButton>
  <LilButton />
</BigButton>

Aqui, props.children nos retornaria <LilButton />


// Example 3
<BigButton />

Aqui, nos retornaria undefined
*/


//App.js
import React from 'react';
import List from './List';

function App() {
  return (
    <div>
      <List type='Living Musician'>
        <li>Sachiko M</li>
        <li>Harvey Sid Fisher</li>
      </List>
      <List type='Living Cat Musician'>
        <li>Nora the Piano Cat</li>
      </List>
    </div>
  );
}

// export default App;

//List.js:
import React from 'react';

function List(props) {
  let titleText = `Favorite ${props.type}`;
  if (props.children instanceof Array) {
    titleText += 's';
  }
  return (
    <div>
      <h1>{titleText}</h1>
      <ul>{props.children}</ul> 
    </div>
  );
}
/*Aqui props.children seria o valor que está sendo passado
no <li> do app*/

// export default List;

//12. Giving Default Values to props
/*
Caso alguma props espere por algum valor, mas não seja passado
é bom termos um valor default pré-definido

Podemos fazer isso justamente definindo um valor pré-definido

Há 3 maneiras de fazer isto:

Primeira:
Adicionar um defaultProps static property para o Componente
ex:
function Example(props) {
  return <h1>{props.text}</h1>
}

Example.defaultProps = {
  text: 'This is default text',
};

Segunda:
Você pode definir o default value diretamente na definição
do Componente

ex:

function Example({text='This is default text'}) {
    return <h1>{text}</h1>
}

Terceira: 
Você pode definir o valor dentro da função:

function Example(props) {
  const {text = 'This is default text'} = props;
  return <h1>{text}</h1>
}

*/

//Button.js:
import React from 'react';

function Button(props) {
  const { text } = props;
  
  const buttonText = text || 'Default Text of Big Button';

  return (
    <button>{buttonText}</button>
  );
}

// export default Button;

//App.js:
import React from 'react';
import Button from './Button.js';

function App() {
  return <Button text="" />;
}

// export default App