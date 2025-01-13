import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { useNavigation } from '../context/NavigationContext';

const Container = styled.View`
  flex: 1;
  padding: 70px 32px 32px 32px;
`;

const LoginButton = styled.View`
  margin-top: 60px;
  margin-bottom: 70px;
`;

const LearnMoreContainer = styled.View`
  padding-top: 13px;
  border-top-color: #D3D3D4;
  border-top-width: 1px;
`;

const Title = styled.Text`
  font-family: Poppins-SemiBold;
  color: #222121;
  font-size: 20px;
`;

const Input = styled.TextInput.attrs({
  placeholderTextColor: '#000000',
})`
  width: 100%;
  padding: 15px 20px 15px 20px;
  border: 1px solid #BABABB;
  border-radius: 5px;
  margin-top: 20px;
  font-size: 17px;
  font-family: Poppins-Regular;
`;

const LearnMore = styled.Text`
  font-family: Poppins-Regular;
  fontSize: 15px;
  color: #555555;
  text-align: center;
`;

const LearnMoreLink = styled(LearnMore)`
  text-decoration: underline;
`;

export const LoginScreen = () => {

  const { navigate } = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => navigate('Orders');

  return (
    <ScrollView>
      <Logo />
      <Container>
        <Title>Entrar no Consumer APP</Title>
        <Input
          placeholder="Usuário"
          value={username}
          onChangeText={setUsername}
        />
        <Input
          placeholder="Senha"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />
        <LoginButton>
          <Button onPress={handleLogin}>ENTRAR</Button>
        </LoginButton>
        <LearnMoreContainer>
          <LearnMore>Utilize um usuário e senha cadastrado no Consumer Desktop.{' '}
            <LearnMoreLink>
              Veja aqui.
            </LearnMoreLink>
          </LearnMore>
        </LearnMoreContainer>
      </Container>
    </ScrollView>
  );
};
