  import React, { Component } from "react";
import SmurfInfo from "./SmurfInfo";
import SmurfForm from "./SmurfForm";
import styled from 'styled-components';

import "./App.css";

class App extends Component {
  render() {
    return (
      <DivStyle>
        <h1>SMURFS! 2.0 W/ Redux</h1>
        <SmurfForm />
        <SmurfInfo />
      </DivStyle>
    );
  }
}

export default App;


const DivStyle = styled.div`
   text-align: center;
`