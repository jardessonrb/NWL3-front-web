import React from 'react';

import './styles/global.css';
import 'leaflet/dist/leaflet.css';

import Routes from './routes';

// interface Props{
//   text: string;
// }

// function Title(props: Props){

//   return(
//   <h1>{props.text}</h1>
//   )
// }

function App() {
  return (
    <Routes />
  );
}

export default App;
