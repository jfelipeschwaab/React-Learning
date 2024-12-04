/*
O que são Uncontrolled Components?

Pense, você está construindo uma aplicação React e você precisa de algum
input de seus usuário. Você coloca um elemento input e torna-o um
controlled component utilizando algo para controlar seu estado. Mas você
sabe que também pode criar uncontrolled components??

Esse artigo irá cobrir o que são esses tais uncontrolled componentes, como
eles são similares e diferentes de controlled components, e quando você
deve utilizá-los em suas aplicações React

Enquanto forms elementes são capazes de manusear seu estado internamente,
em React, preferimos manter qualquer valor mutável com a propriedade de
estado, logo, para ganhar controle sobre este elemento, colocamos o 
attribute value no input element e damos o valor do estado do elemento
para ele.

Apesar de essas validações em tempo-real sejão comuns, em alguns casos,
nós vamos provavelmente ligar para o valor das coisas apenas depois
delas serem ''submitted''. Nesses cenários, guardar o valor do input
a cada mudança pode ser overkill (Muito para pouco). 

UNCONTROLLED COMPONENTS:

Um uncontrolled component é um form element que mantém seu proprio estado
no DOM. Melhor que guardar seu valor e atualizar em toda mudança, podemos
apenas utilizar um ref attribute para 'retrieve' o valor diretamente do
DOM quando necessário.

De acordo com o React:
Refs provide a way to access DOM nodes or React elements created in the render method.

para criar um uncontrolled component, começamos por criar um ref
usando o useRef() method. Esse método retorna um objeto com uma propriedade
.current que aponta para o nó do DOM. Esse ref object aponta para
um form element usando o ref attribute, e a qualquer momento que precisarmos
do valor desse form element, podemos simplesmente referenciá-lo usando
o .current property do ref Object

WHEN SHOULD YOU USE AN UNCONTROLLED COMPONENT?
Na maioria das vezes será melhor trackear o estado do componente e seu valor,
mas há um caso específico em que um uncontrolled component é útil:

quando um input tiver o tipo "file"
<input type="file"></input>
*/