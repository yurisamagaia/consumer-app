import React from 'react';
import { ScrollView } from 'react-native';
import styled from 'styled-components/native';
import { Logo } from '../components/Logo';
import { Button } from '../components/Button';
import { useNavigation } from '../context/NavigationContext';

const Welcome = styled.View`
  padding-horizontal: 16px;
  gap: 10px;
`;

const Start = styled.View`
  margin-top: 65px;
  margin-bottom: 70px;
`;

const Container = styled.View`
  flex: 1;
  padding: 88px 32px 32px 32px;
`;

const LearnMoreContainer = styled.View`
  padding-top: 13px;
  border-top-color: #D3D3D4; 
  border-top-width: 1px;
`;

const Title = styled.Text`
  font-family: Poppins-Bold;
  color: #222121;
  font-size: 32px;
`;

const Content = styled.Text`
  font-family: Poppins-Regular;
  color: #222121;
  font-size: 17px;
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

export const WelcomeScreen = () => {

  const { navigate } = useNavigation();

  const handleGoToLogin = () => navigate('Login');

  return (
    <ScrollView>
      <Logo />
      <Container>
        <Welcome>
          <Title>Bem-vindo ao Consumer APP!</Title>
          <Content>O Consumer APP foi desenvolvido para funcionar junto com uma assinatura premium do Consumer.</Content>
        </Welcome>
        <Start>
          <Button onPress={handleGoToLogin}>INICIAR</Button>
        </Start>
        <LearnMoreContainer>
          <LearnMore>Saiba mais sobre o Consumer APP.{' '}
            <LearnMoreLink>
              Veja aqui.
            </LearnMoreLink>
          </LearnMore>
        </LearnMoreContainer>
      </Container>
    </ScrollView>
  );
};
