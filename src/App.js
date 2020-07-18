import React from 'react';
import request from './request.js'
import './App.css';
import Row from './Row.js';
import Main from './Main.js'
function App() {
  return (
    <div className="App">
      <Main fetchurl={request.trending}/>
      <Row title="NETFLIX ORIGINALS" fetchurl={request.originals}/>
      <Row title="Trending" fetchurl={request.trending}/>
      <Row title="Top Rated" fetchurl={request.toprated}/>
      <Row title="Action" fetchurl={request.action}/>
      <Row title="Comedy" fetchurl={request.comedy}/>
      <Row title="Horror" fetchurl={request.horror}/>
      <Row title="Romantic" fetchurl={request.romantic}/>
      <Row title="Documentaries" fetchurl={request.documentaries}/>
    </div>
  );
}

export default App;
