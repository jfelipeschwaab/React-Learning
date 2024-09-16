//Módulo 4 Codecademy
//1. Use Multiline JSX in a Component
/*
ex:
<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>

Como retornar tudo isso como um componente?
apenas dar um return e colocar esses itens entre
parênteses
*/

const MyQuote = () => {
    return(
<blockquote>
  <p>
    The world is full of objects, more or less interesting; I do not wish to add any more.
  </p>
  <cite>
    <a target="_blank"
      href="https://en.wikipedia.org/wiki/Douglas_Huebler">
      Douglas Huebler
    </a>
  </cite>
</blockquote>
    );
};

// export default MyQuote;

//2. Use a Variable Attribute in a Component
/*
Olhe esse objeto JS nomeado redPanda:

const redPanda = {
  src: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Endangered_Red_Panda.jpg',
  alt: 'Red Panda',
  width: '200px'
};

*/
import React from 'react';

const owl = {
    title: 'Excellent Owl',
    src: 'https://content.codecademy.com/courses/React/react_photo-owl.jpg'
  };

const Owl = () => {
    return(
        <div>
            <h1>
                {owl.title}
            </h1>
            <img src={owl.src} alt={owl.title}/>
        </div>
    );
}

// export default Owl;

//3. Putting Logic in a Function Component
/*
Um componente TEM que ter o return statement. Entretanto, não é só isso
que a função de componente pode ter

Você pode adicionar lógicas simples e cálculos com a função

eX:
function RandomNumber() {
  //First, some logic that must happen before returning
  const n = Math.floor(Math.random() * 10 + 1);
  //Next, a return statement using that logic: 
  return <h1>{n}</h1>
}

olhe este erro:
function RandomNumber() {
  return (
    const n = Math.floor(Math.random() * 10 + 1);
    <h1>{n}</h1>
  )
}

NÃO se pode colocar a lógica dentro do return, apenas fora.
*/
const friends = [
    {
      title: "Yummmmmmm",
      src: "https://content.codecademy.com/courses/React/react_photo-monkeyweirdo.jpg"
    },
    {
      title: "Hey Guys! Wait Up!",
      src: "https://content.codecademy.com/courses/React/react_photo-earnestfrog.jpg"
    },
    {
      title: "Yikes",
      src: "https://content.codecademy.com/courses/React/react_photo-alpaca.jpg"
    }
  ];

import React from 'react';

function Friend() {
    let friend = friends[0];
    return (
        <div>
            <h1>friend.title</h1>
            <img src={friend.src}/>
        </div>
    );
}

// export default Friend;

//4. Use a Conditional in a Function Component
/*
Pode-se usar, desde que fora do return statement
*/
function TonightsPlan() {
    if(fiftyFifty){
        return <h1>Tonight I'm going out WOO</h1>
    }else{
        return <h1>Tonight I'm going to bed WOOO</h1>
    }
}

// export default TonightsPlan;

//5. Event Listener and Event Handlers in a Component
/*
Seu componente pode também incluir event handlers

com isso, podemos fazer componentes com interações com a interface, como
o click

ex:

function MyComponent(){
  function handleHover() {
    alert('Stop it.  Stop hovering.');
  }
  return <div onHover={handleHover}></div>;
}

no exemplo acima, o event handler é handleHover(). É passado como uma prop

Event Handler functions são definidos dentro do componente e por convenção
, começam com a palavra handle, seguida do tipo do seu evento.

Há algo a se tomar cuidado, olhe novamente esta linha:
return <div onHover={handleHover}></div>

o handleHover é passado sem o parênteses: handleHover(), como seria de 
praste ver uma função sendo utilizada, isso é por que o handleHover deve
ser chamado apenas quando o evento acontecer, Passando com parênteses, o
evento iria acontecer assim que a página fosse carregada.
*/
import React from 'react';

function SubmitButton() {
  function handleClick() {
    alert('Submission Successful.');
  }
  return <button onClick={handleClick}>Submit</button>;
}

export default SubmitButton;
