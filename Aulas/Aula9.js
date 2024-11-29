//Módulo 9 CodeCademy
//React Programming Patterns
//1. Create Container Component
/*
Separar container Components de presentational components é um padrão
popular de programação React.

A parte funcional de um componente (Manter um estado, fazer cálculos
baseado em props, etc) pode ser separado em um container componente,
também conhecido como stateful component.

Esse container fica a cargo de manter o estado (Criar e atualizar) e passar
a frente para qualquer componente que o renderiza por props

***Coloquei o JS do arquivo em outra pasta chamada ''container''
*/

//2. Create Presentational Component
/*
Agora que criamos um container component e separamos a lógica, podemos 
criar o presentational (ou stateless) component para renderizar nossos
itens

O trabalho do Presentational Component é de apenas conter JSX. Deve ser
um componente exportado e não deve renderizar-se pois um presentational
component sempre irá ser renderizado por um container component

*/
import React from "react";
function GuineaPigsSlideShow({src , isFavorite}) {
  return (
      <div data-testid="guineaPigsSlideShow" id="guineaPigsSlideShow">
        <h1>Cute Guinea Pigs</h1>
        <img alt="Guinea Pigs Slideshow" src={src} className={isFavorite? "favorite" : ""}/>
      </div>
  );
}

export default GuineaPigsSlideShow;


//3. Parent/Child and Sibling/Sibling Communication
/*
Vimos como container components comunicam-se com presentational components
passando seu estado por Props, mas como presentational components comunicam
mudanças para seu container?

Para um stateless component(presentational) comunicar-se com um stateful
(container) component, o container component deve definir e prover um
caminho para que o presentational component comunique-se com ele usando
um change handler function para comunicar-se passando-o como props da
função

ex:
function Container() {
  const [isActive, setIsActive] = useState(false);								
                                
  return (
    <>
      <Presentational active={isActive} toggle={setIsActive}/>
      <OtherPresentational active={isActive}/>
    </>
    );							
  }
                        
function Presentational(props) {
  return (
    <h1>Engines are {props.active}</h1>
    <button onClick={() => props.toggle(!props.active)}>Engine Toggle</button>
  );
}
                            
function OtherPresentational(props) {
  // render...
}

*/

import React, { useState, useEffect } from "react";
import { createRoot } from "react-dom/client";
import GuineaPigsSlideShow from "../components/GuineaPigsSlideShow";
import GuineaPigsForm from "../components/GuineaPigsForm";

const GUINEAPATHS = [
  "https://content.codecademy.com/courses/React/react_photo-guineapig-1.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-2.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-3.jpg",
  "https://content.codecademy.com/courses/React/react_photo-guineapig-4.jpg",
];

function GuineaPigsContainer() {
  const [currentGP, setCurrentGP] = useState(0);
	const [favoriteGP, setFavoriteGP] = useState(0);
	const src = GUINEAPATHS[currentGP];

  const favoriteChangeHandler = (event) => {
    setFavoriteGP(parseInt(event.target.value));
  }

  const resetFavoriteHandler = () => {
    setFavoriteGP(0);
  }

  useEffect(() => {
		const intervalId = setInterval(() => {
			setCurrentGP(prevGP => {
				const nextGP = prevGP + 1;
				return nextGP % GUINEAPATHS.length;
			});
		}, 5000)
		return () => clearInterval(intervalId);
	}, []);


	return (
    <>
      <GuineaPigsSlideShow src={src} isFavorite={currentGP === favoriteGP}/>
      <GuineaPigsForm favoriteGP={favoriteGP} onSelectFavorite={favoriteChangeHandler} onResetFavorite={resetFavoriteHandler}/>
    </>
  );
}

// export default GuineaPigsContainer;
