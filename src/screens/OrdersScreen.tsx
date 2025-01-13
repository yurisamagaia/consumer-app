import React, { useContext } from 'react';
import { FlatList, Image, View } from 'react-native';
import { AppContext } from '../context/AppContext';
import styled from 'styled-components/native';
import { Order } from '../types';
import { useNavigation } from '../context/NavigationContext';

const Container = styled.View`
  padding: 15px;
`;

const OrderCard = styled.TouchableOpacity`
  background-color: ${(props: Order) => (props.isClosing ? '#CBB853' : '#5B9878')};
  border-radius: 3px;
  width: 79px;
  height: 79px;
  justify-content: center;
  align-items: center;
`;

const OrderText = styled.Text`
  font-size: 32px;
  font-family: Poppins-SemiBold;
  color: #FFFFFF;
`;

const Title = styled.Text`
  font-size: 32px;
  font-family: Poppins-Bold;
  color: #222121;
`;

const Subtitle = styled.Text`
  font-size: 18px;
  font-family: Poppins-Regular;
  color: #000000;
`;

const FloatingButton = styled.TouchableOpacity`
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 100px;
  left: 50%;
  margin-left: -35px;
`;

const BottomNav = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  background-color: #ECECEC;
  border-top-width: 1px;
  border-top-color: #D3D3D4;
`;

const NavItem = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  gap: 5px;
`;

const NavText = styled.Text`
  font-size: 12px;
  color: ${({active}: {active: boolean}) => (active ? '#EA102F' : '#000000')};
`;

const AdminText = styled.Text`
  font-size: 13px;
  color: #222121;
  font-family: Poppins-Regular;
`;

const Admin = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;


export const OrdersScreen = () => {

  const { navigate } = useNavigation();
  const { orders } = useContext(AppContext);
  const myOrders = orders.filter(order => order.mine === true);

  return (
    <View style={{flex: 1}}>
      <Container>
        <Admin>
          <AdminText>admin</AdminText>
          <Image source={require('../assets/images/user.png')} />
        </Admin>
        <Title>Pedidos Abertos</Title>
        <FlatList
          data={myOrders}
          keyExtractor={(item) => `list1-${item.id.toString()}`}
          numColumns={4}
          columnWrapperStyle={{ gap: 15 }}
          contentContainerStyle={{ gap: 15, marginTop: 30 }}
          ListHeaderComponent={
            <Subtitle>Abertos por mim ({myOrders?.length})</Subtitle>
          }
          renderItem={({ item }) => (
            <OrderCard
              isClosing={item.isClosing}
              onPress={() => navigate('OrderDetails', { order: item })}
            >
              <OrderText>{item.id}</OrderText>
            </OrderCard>
          )}
        />
        <FlatList
          data={orders}
          keyExtractor={(item) => `list2-${item.id.toString()}`}
          numColumns={4}
          columnWrapperStyle={{gap: 15}}
          contentContainerStyle={{gap: 15, marginTop: 30}}
          ListHeaderComponent={
            <Subtitle>Todos ({orders?.length})</Subtitle>
          }
          renderItem={({ item }) => (
            <OrderCard
              isClosing={item.isClosing}
              onPress={() => navigate('OrderDetails', { order: item })}
            >
              <OrderText>{item.id}</OrderText>
            </OrderCard>
          )}
        />
      </Container>
      <FloatingButton>
        <Image source={require('../assets/images/add.png')} />
      </FloatingButton>
      <BottomNav>
        <NavItem>
          <Image source={require('../assets/images/orders.png')} />
          <NavText active>Pedidos</NavText>
        </NavItem>
        <NavItem>
          <Image source={require('../assets/images/history.png')} />
          <NavText>Histórico</NavText>
        </NavItem>
        <NavItem>
          <Image source={require('../assets/images/settings.png')} />
          <NavText>Config</NavText>
        </NavItem>
      </BottomNav>
    </View>
  );
};
