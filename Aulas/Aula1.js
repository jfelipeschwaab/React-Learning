//Codecademy Módulo 1
//1. What is JSX?
/*
JSX é uma extensão de sintaxe para JS. Foi escrita
para ser usada com React. JSX code 
parece-se muito com HTML

O que é essa extensão de sintaxe?

Nesse caso, significa que JSX não é um JS válido.
Web browser não conseguem ler

Se um arquivo JS contem JSX Code, aí sim esse arquivo
será compilado. Isso significa que antes de qualquer
arquivo chegar ao web browser, um JSX Compiler vai
traduzir qualquer JSX em regular JavaScript

*/

const h1 = <h1>Hello World</h1>;

//2. JSX Elements
/*
Uma unidade básica de JSX é um Elemento JSX

ex: <h1>Hello World</h1>

Esse elemento JSX parece igual à html! a única diferença
notável é que você o acharia em um arquivo JS, não HTML

*/

<p>Hello World</p>;

//3. JSX Elements an Their Sorroundings
/*
JSX Elements são tratados como expressões Javascript
eles podem ir até onde as expressões JS conseguem.
Isso significa que um elemento JSX pode ser salvado em 
uma variável, passado para uma função, armazenado em 
um objeto ou array...

ex de um elemento JSX sendo salvo em uma variável:

const navBar = <nav>I am a nav bar</nav>

ex de elementos JSX sendo armazenados em um objeto:
const myTeam = {
  center: <li>Benzo Walli</li>,
  powerForward: <li>Rasha Loa</li>,
  smallForward: <li>Tayshaun Dasmoto</li>,
  shootingGuard: <li>Colmar Cumberbatch</li>,
  pointGuard: <li>Femi Billon</li>
};
*/
const myArticle = <article>This is my article</article>;

//4. Attributes in JSX
/*
Elementos JSX pode ter atributos, assim como elementos
html também podem ter

Um atributo JSX é escrito usando uma sintaxe html-alike

um nome, seguido de =, abre aspas e o valor.

ex: 

my-attribute-name="my-attribute-value";

Ex de JSX Elements com attributes:
<a href="http://www.example.com"> Welcome to the web </a>
const title = <h1 id'title'> Introduction to React.js: Part I</h1>;

Um único elemento JSX pode ter vários atributos, assim
como no HTML
*/

const p1 = <p id="large">foo</p>;
const p2 = <p id="small">bar</p>;

//5. Nested JSX
/*
Você consegue colocar um elemento dentro do outro, assim como no HTML

Se uma expressão JSX usar mais de uma linha, você deve envolver todo o 
conteúdo entre parênteses

ex:
const theExample = (
    <a href="https://www.example.com">
        <h1>
            Click me!
        </h1>
    </a>
);
*/
const myDiv = (
    <div>
        <h1>
            Hello World
        </h1>
    </div>
);

//6. JSX Outer Elements
/*
Uma expressão JSX deve ter exatamente UM outermost Element, ou seja, o
elemento pai

ex, esse código funcionaria:
const paragraphs = (
  <div id="i-am-the-outermost-element">
    <p>I am a paragraph.</p>
    <p>I, too, am a paragraph.</p>
  </div>
);

esse não:
const paragraphs = (
  <p>I am a paragraph.</p> 
  <p>I, too, am a paragraph.</p>
);

*/
const blog = (
    <div>
        <img src="pics/192940u73.jpg" />
        <h1>
            Welcome to Dan's Blog!
        </h1>
        <article>
            Wow I had the tastiest sandwich today. I <strong>literally</strong> almost freaked out.
        </article>
    </div>
  );

//7. Rendering JSX
/*
Aprendi como se escreve elementos JSX, agora como renderizá-los?
Renderizar uma expressão JSX significa fazê-la aparecer na tela


*/
const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

//8. Rendering JSX Explained
/*
Vamos examinar o código escrito no ultimo exercicio

const container = document.getElementById('app');
const root = createRoot(container);
root.render(<h1>Hello world</h1>);

Antes de começar, é necessário entender que o React apoia-se em duas coisas
para renderizar

1. Qual conteúdo
2. Aonde colocar esse conteúdo

Com isso em mente, vamos olhar a primeira linha
const container = document.getElementById('app');

Essa linha:
- Utiliza DOM, que representa nossa WebPage
- Pega um elemento HTML passado com id app
- Armazena no elemento container

Próxima linha:
const root = createRoot(container);

Utilizamos createRoot() da biblioteca react-dom/client, que cria uma root
React de container e armazena na root. a root pode ser utilizada para
renderizar uma expressão JSX

É aqui que vamos colocar nosso conteúdo que será renderizado

A última linha:
root.render(<h1>Hello world</h1>)

utilizamos o render() method da root para renderizar o conteúdo passado
como argumento
*/
const container2 = document.getElementById('container');
let root2 = createRoot(container2);
root2.render(<h1>Hello world</h1>);

//9. Passing a Variable to render()
/*
O argumento passado para o render não precisa necessariamente ser um elemento
JSX, mas levar à uma expressão JSX

ex:
const toDoList = (
  <ol>
    <li>Learn React</li>
    <li>Become a Developer</li>
  </ol>
);

const container = document.getElementById('app');
const root = createRoot(container);
root.render(toDoList);
*/

let myList = (
    <ul>
        <li>Olá</li>
        <li>Mundo</li>
        <li>Pragmático</li>
    </ul>
);

root2.render(myList);
