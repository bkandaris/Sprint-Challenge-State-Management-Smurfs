import React from "react";
import styled from 'styled-components';

const SmurfDisplay = props => {
  return (
    <div>
      <hr />
      <Name>{props.info.name}</Name>
      <Para>{props.info.age}</Para>
      <Para>{props.info.height}</Para>
    </div>
  );
};

export default SmurfDisplay;

const Para = styled.p`
  font-size: 1.5em;
  font-weight: bold;
  color: yellow;
`

const Name = styled.h4`
  font-size: 3rem;
  margin: 0;
  padding: 0;
`