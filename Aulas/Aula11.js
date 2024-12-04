//Módulo 11 Codecademy
//1. React Forms
/*
Em forms React, você quer que o servidor saiba
todo novo caracter ou deleção, o mais rápido possível para saber.
Dessa forma, sua tela sempre estará sincronizada com o resto da aplicação
*/

//2. Input onChange
/*
Vamos pensar em como forms são manuseados em React.

Em um form HTML padrão, o estado do form é tipicamente manuseado pelo browser,
O estado não se atualiza até o usuário apertar o botão de submit.

As coisas funcionam diferente com React. Em forms React, o estado do form
pode ser manuesado pelo componente, e updates são chamados pelo event 
onChange. Quando o user interage com o input, como adicionar ou deletar
algum caractere, o event onChange é chamado e atualiza o estado do 
componente.

Isso permite que o componente imediatamente reflita qualquer mudança feita
pelo usuário e mudando a view de acordo com tal estado.
*/
import React, { useState } from "react";

function Example() {
  const [userInput, setUserInput] = useState("");
  function handleChange(e) {
    setUserInput(e.target.value);
  }
  return <input onChange={handleChange} type="text" />;
}

//3. Write an Input Event Handler
/*
Vamos definir um event handler function que é chamado a qualquer momento
a partir do momento que o usuário digita um caractere dentro do input 
element
*/

import React, { useState } from 'react';
import styles from './Input.module.css';

function Input() {
  const [userInput, setUserInput] = useState("");

  function handleUserInput(e) {
      setUserInput(e.target.value);
  }
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>Sign up for our newsletter to stay up-to-date on the latest products, receive exclusive discounts, and connect with other programmers who share your passion for all things tech.</p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput}/>
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4></h4>
      </div>
    </>
    );
}

export default Input

//4. Set the Input's Initial State
/*
Ótimo, Qualquer momento que alguem digitar ou deletar no input field
a função handleUserInput irá atualizar userInput com o texto do <input>

Desde que estamos utilizando o setUserInput, isso signfica que userInput 
necessita de um initial State!
*/
import React, { useState } from "react";
import styles from "./Input.module.css";

function Input() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput} />
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input: </h2>
        <h4></h4>
      </div>
    </>
  );
}

// export default Input;

//5. Update an Input's Value
/*
Quando um usuário digita no <input> field, um trigger event é chamado, que
chamará a função handleUserInput. Isso é ótimo!

handleUserInput() irá setar userInput igual ao valor que está sendo digitado
no input. Isso também é ótimo!

Mas há um problema: você pode setar userInput para qualquer valor que você
queira, mas o valor do input não irá atualizar.

no React, o value prop de um elemento é usado para controlar o valor do input
e sincronizá-lo com o estado do componente. sem setar o value prop, mudanças
feitas no input não serão refletidas no estado do componente, levando a 
inconsistências e potenciais bugs

Para garantir que o valor do input dê match com o estado do componente,
podemos setar o value prop e usar o onChange event para atualizar o estado
com o novo valor. Quando o estado é atualizado, o componente re-renderiza,
e o value prop é setado como o novo valor do estado do componente

Isso faz com que o estado do componente seja a fonte que alimenta o valor
do input, garantindo que os dados são consistentes e podem ser facilmente
manuseados
*/
import React, { useState } from "react";
import styles from "./Input.module.css";

function Input() {
  const [userInput, setUserInput] = useState('');
  function handleUserInput(e) {
    setUserInput(e.target.value);
  }
  return (
    <>
      <div className={styles.emailContainer}>
        <h2>Let's stay in touch.</h2>
        <p>
          Sign up for our newsletter to stay up-to-date on the latest products,
          receive exclusive discounts, and connect with other programmers who
          share your passion for all things tech.
        </p>
        <form>
          <label for="email">Email: </label>
          <input id="email" type="text" onChange={handleUserInput} value={userInput}/>
        </form>
      </div>
      <div className={styles.inputDisplay}>
        <h2>Current User Input:</h2>
        <h4>{userInput}</h4>
      </div>
    </>
  );
}

// export default Input;
//6. Controlled vs Uncontrolled
/*
Há dois termos que provavelmente serão importantes quando você fala de 
forms React: controlled Component e uncontrolled component

um uncontrolled component é um componente que mantémseu próprio estado
interior. Um controlled component é um componente que não mantém seu internal
state. Já que um controlled component não tem estado, deve ser controlled
por algo...

Em react, quando você dá um value attribute para um input, então algo
estranho acontece: o input element torna-se controlled. Ele para de utilizar
seu internal storage. Isso é um jeito "React" de fazer as coisas.
*/
