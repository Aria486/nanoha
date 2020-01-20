import React, { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

const circleAnimation = keyframes`
  0%{
    transform: rotate(0deg);
    -ms-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
  }

  100%{
    transform: rotate(360deg);
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
  }
`;

const Load = styled.div`
  position: fixed;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 99999;
  width: 100%;
  left: 0;
  filter: alpha(opacity=40);
`;

const Circle = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border: 6px solid red;
  border-left: 6px solid transparent !important;
  border-radius: 50%;
  position: relative;
  z-index: 10000;
  margin-top: 300px;
  -webkit-transform : rotate(135deg);
  -moz-transform : rotate(135deg);
  -o-transform : rotate(135deg);
  transform : rotate(135deg);
  animation: ${circleAnimation} 1s infinite linear ;
  -webkit-animation: ${circleAnimation} 1s infinite linear ;
  -ms-animation: ${circleAnimation} 1s infinite linear ;
  -webkit-transform-origin: center center;
  -ms-transform-origin: center center;
  transform-origin: center center;
`;

interface Props {
  loadState: boolean,
  style: object,
};

const Loading = (props: Props) => {

  const [loading, setLoading] = useState(props.loadState);

  useEffect(() => {
    setLoading(props.loadState);
  },[props.loadState]);

  return loading ? <Load><Circle style={props.style} /></Load> : <div />;
}

export default Loading;