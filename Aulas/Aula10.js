//Módulo 10 CodeCademy
//1. React Styles
/*
Há muitas maneiras de usar estilos no React.
Esse exercício é focado em dois deles:
inline styles e style object variables

Um inline style é um estilo que é escrito como
atributo:

<h1 style={{ color: 'red' }}>Hello World!</h1>


Entretanto, utilizar inline styles pode ser uma bagunça, uma alternativa
é armazenar um style object em uma variável e depois disso, injetar essa
variável como o valor do atributo style

ex: 

const darkMode = {
    color: 'white',
    background: 'black',
};


logo após:

<h1 style={darkMode}>Hello World!</h1>
*/

//2. Style Syntax
/*
Uma coisa para lembrar-se é que quando vamos estilizar componentes JSX É 
que utilizamos propriedades CSS usando camelCase em React:

const styles {
    marginTop: '20px',
    backgroundColor: 'green',
};
*/

//3. Multiple Stylesheets
/*
Organizar inline styles e style object variables são maneiras válidas
de estilizar em React, pode ser dificil de trackear estilos enquanto 
sua aplicação cresce

Uma maneira de fazer estilos serem modulares, organizados e reutilizáveis é
para criar um stylesheet separado para cada componente

podemos importar o stylesheet usando o import

import './App.css';


Mas pode-se tornar uma bagunça pra usar nomes simples

logo, é melhor modularizar

utilizar o nome de cada componente

fileName.module.css
*/