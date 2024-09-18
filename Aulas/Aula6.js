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