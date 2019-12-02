import React, { Component } from 'react';
// import { Component } from 'react';
import './App.css';
import Car from './Car/Car'

function App() {
  const divStyle = {
    textAlign: 'center'
  }
  return (
    <div style={divStyle}>
      <h1>Hello World!</h1>
      <Car name={'Ford'} year={2018}/>
      <Car name={'Audi'} year={2016}>
        <p style={{color: 'red'}}>COLOR</p>
      </Car>
      <Car name={'Mazda'} year={2010}>
        <p style={{color: 'green'}}>COLOR</p>
      </Car>
    </div>
  );
}

// class App extends Component {
//   render() {
//     const divStyle = {
//           textAlign: 'center'
//         }
//     return (
//       <div style={divStyle}>
//        <h1>Hello World!</h1>
//        <Car/>
//      </div>
//     )
//   }
// }

export default App;
