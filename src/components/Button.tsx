import React, { FC, ReactNode } from 'react';
import styled from 'styled-components/native';

const TouchableButton = styled.TouchableOpacity`
  width: 100%;
  height: 65px;
  background-color: #222121;
  border-radius: 8px;
  padding-top: 18px;
  padding-bottom: 18px;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #FFFFFF;
  font-size: ${({size}: {size: ButtonProps['size']}) => (size === 'md' ? '17px' : '20px')};;
  text-align: center;
  font-family: Poppins-Bold;
`;

type ButtonProps = {
  children: ReactNode;
  onPress: () => void;
  size?: 'md' | 'lg';
}

export const Button: FC<ButtonProps> = ({children, onPress, size = 'lg'}) => {
  return (
    <TouchableButton onPress={onPress}>
      <ButtonText size={size}>{children}</ButtonText>
    </TouchableButton>
  );
};
