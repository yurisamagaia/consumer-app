import React from 'react';
import { Image } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';

const Gradient = styled(LinearGradient).attrs({
  colors: ['#79BBCC', '#EA102F'],
  start: {x: 0, y: 0},
  end: {x: 1, y: 1},
})`
  width: 100%;
  height: 370px;
  justify-content: center;
  align-items: center;
`;

export const Logo = () => {
  return (
    <Gradient>
      <Image source={require('../assets/images/logo.png')} />
    </Gradient>
  );
};
