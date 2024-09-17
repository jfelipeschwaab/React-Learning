//Módulo 5 CodeCademy
//1. Returning Another Component
/*
Cada componente React é responsável por um pedaço da interface, assim
que a aplicação cresce de complexidade, componentes precisam interagir 
entre si para suportar as features necessárias ao App

Até então, vimos componentes que retornavam elementos JSX:

function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}

Nesse exemplo, o componente React não está interagindo com outros componentes.
Entretanto, você consegue interagir entre componentes, passando info ou até
mesmo retornando outros componentes

ex:

function PurchaseButton() {
  return <button onClick={()=>{alert("Purchase Complete")}}>Purchase</button>
}

function ItemBox() {
  return (
    <div>
      <h1>50% Sale</h1>
      <h2>Item: Small Shirt</h2>
      <PurchaseButton />
    </div>
  );

Aqui, criamos uma instância de PurchaseButton
*/
import React from 'react';

function Picture() {
  return <img src="https://content.codecademy.com/courses/React/react_photo-octopus.jpg" />;
}

function Profile() {
  return (
    <>
      <Picture />
      <h1>Name: Octavia</h1>
      <h2>Species: Octopus</h2>
       <h2>Class: Cephalopoda</h2>
    </>
  )
}

export default Profile;

//2. Apply a Component in a Render Function
/*
Quando definimos e exportamos nossos componentes, nós usualmente exportamos
para nosso top-level file, App.js. Dentro de App.js, importamos componentes
e retornamo-os dentro do nosso componente App, que é exportado para ser
renderizado.

import Button from './Button'

function App() {
  return <Button />;
}

export default App;
*/
import React from 'react';
import NavBar from './NavBar'


function ProfilePage() {
  return (
    <div>
      <NavBar/>
      <h1>All About Me!</h1>
      <p>I like movies and blah blah blah blah blah</p>
      <img src="https://content.codecademy.com/courses/React/react_photo-monkeyselfie.jpg" />
    </div>
  );
}

// export default ProfilePage;
