//10. The virtual DOM
/*
DOM Manipulation é o coração da moderna e interativa web. infelizmente
é muito mais lento que muitas operações JavaScript

Frameworks JS atualizam o DOM muito mais do que devem

por exemplo, se precisamos atualizar um item de uma lista, o framework 
recriaria a lista inteira, isso é trabalho desnecessário

Para isso, o React popularizou algo chamado the Virtual DOM

O que acontece por debaixo dos panos no virtual DOM?

Em React, para cada DOM object, há um correspondente "Virtual DOM Object"
Um objeto virtual DOM é uma representação do Objeto DOM, como uma cópia

Um objeto virtual DOM tem as mesmas propriedades de um objeto real DOM, 
mas o virtual consegue mudar diretamente o que está na tela

Manipular o DOM é lento. Manipular o virtual DOM é muito mais rápido porque
nada é desenhado na tela. Pense nisso como manipulando um blueprint de uma
casa, e não movendo móveis na casa.

Como isso ajuda?
Quando você renderiza um elemento JSX, todos os objetos DOM são atualizados

isso pode parecer ineficiente, mas o custo é insignificate porque o virtual
DOM pode atualizar muito rápido

Uma vez que o virtual DOM foi atualizado, o React Compara o virtual DOM atual
com a versão antiga.

Ao comparar, React sabe exatamente aonde no DOM há modificações. esse processo
é chamado de "diffing"

Ao saber onde há modificações, o React muda APENAS esses objetos no DOM Real

*/