import React from 'react';
import { View, FlatList, Image } from 'react-native';
import { formatCurrency } from '../utils/currency';
import { Button } from '../components/Button';
import styled from 'styled-components/native';
import { Item } from '../types';
import { useNavigation } from '../context/NavigationContext';

const Container = styled.ScrollView`
  flex: 1; 
  background-color: #fff;
`;

const Header = styled.View`
  background-color: #5B9878;
  height: 65px;
  width: 100%;
`;

const OrderContainer = styled.View`
  align-items: center; 
  margin-top: 10px;
  margin-bottom: 10px;
`;

const ListContainer = styled.View`
  padding-left: 16px;
  padding-right: 16px;
`;

const OrderId = styled.Text`
  font-size: 62px;
  font-family: Poppins-Bold;
`;

const ClientContainer = styled.View`
  background-color: #F0F0F0; 
  border-radius: 15px;
  padding: 15px;
`;

const PeopleContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  border-top-color: #D3D3D4;
  border-top-width: 1px;
  padding-top: 15px;
  margin-top: 15px;
`;

const TextRegular = styled.Text`
  font-size: 15px;
  font-family: Poppins-Regular;
  color: #000000;
`;

const TextSemiBold = styled.Text`
  font-size: 15px;
  font-family: Poppins-SemiBold;
  color: #000000;
`;

const TextBold = styled.Text`
  font-size: 15px;
  font-family: Poppins-Bold;
  color: #000000;
`;

const ListSeparator = styled.View`
  height: 1px;
  border-width: 1px;
  border-color: #D3D3D4;
  border-style: dashed;
`;

const ListHeader = styled.View`
  border-bottom-color: #F0F0F0;
  border-bottom-width: 1px;
  margin-top: 15px;
  padding-bottom: 10px;
`;

const ListHeaderText = styled.Text`
  fontSize: 17px; 
  fontFamily: Poppins-Bold;
  color: #222121;
`;

const FloatButton = styled.TouchableOpacity`
  position: absolute;
  bottom: 120px;
  right: 16px;
`;

const FlatListContainer = styled.View`
  padding-bottom: 150px;
`;

const FooterContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border-top-width: 1px;
  border-top-color: #D3D3D4;
  gap: 15px;
`;

const FooterBotton = styled.TouchableOpacity`
  width: 65px;
  height: 65px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border-color: #222121;
  border-width: 2px;
`;

const FlexGrow = styled.View`
  flex-grow: 1;
`;

const ItemContainer = styled.View`
  flex-direction: row;
  padding-top: 15px; 
  padding-bottom: 15px;
  gap: 20px;
`;

const CompleteContainer = styled.View`
  justify-content: center;
`;

const TextObs = styled.Text`
  font-size: 15px;
  font-family: Poppins-Regular;
  color: #6D6D6D;
`;

const ItemNameContainer = styled.View`
  flex-direction: row; 
  justify-content: space-between;
`;

export const OrderDetailsScreen = () => {

  const { navigate, params } = useNavigation();

  const order = params?.order;

  const total = order.items?.reduce((sum: number, item: Item) => sum + item.price, 0);

  const renderItem = ({ item }: { item: Item }) => (
    <ItemContainer>
      <FlexGrow>
        <ItemNameContainer>
          <TextSemiBold>{item.name}</TextSemiBold>
          <TextSemiBold>{formatCurrency(item.price)}</TextSemiBold>
        </ItemNameContainer>
        {item?.obs && <TextObs>{item?.obs}</TextObs>}
        {item.extra?.map((element: string, index: number) => (
          <View key={index}>
            <TextRegular>{element}</TextRegular>
          </View>
        ))}
      </FlexGrow>
      <CompleteContainer>
        <Image source={require('../assets/images/complete.png')} />
      </CompleteContainer>
    </ItemContainer>
  );

  return (
    <>
      <Container>
        <Header />
        <OrderContainer>
          <OrderId>{order.id}</OrderId>
        </OrderContainer>
        <ListContainer>
          <ClientContainer>
            <TextRegular>
              Cliente:{' '}
              <TextBold>{order.client}</TextBold>
            </TextRegular>
            <PeopleContainer>
              <View>
                <TextRegular>
                  Qtde. pessoas:{' '}
                  <TextBold>{order.people}</TextBold>
                </TextRegular>
              </View>
              <View>
                <TextRegular>
                  Tempo total:{' '}
                  <TextBold>{order.totalTime} min</TextBold>
                </TextRegular>
              </View>
            </PeopleContainer>
          </ClientContainer>
          <FlatListContainer>
            <FlatList
              data={order.items}
              renderItem={renderItem}
              keyExtractor={(item) => item.id.toString()}
              ItemSeparatorComponent={() => <ListSeparator />}
              contentContainerStyle={{paddingBottom: 20}}
              nestedScrollEnabled
              ListHeaderComponent={
                <ListHeader>
                  <ListHeaderText>Itens ({order.items?.length})</ListHeaderText>
                </ListHeader>
              }
            />
          </FlatListContainer>
        </ListContainer>
      </Container>

      <FloatButton>
        <Image source={require('../assets/images/add-green.png')} />
      </FloatButton>

      <FooterContainer>
        <FooterBotton onPress={() => navigate('Orders')}>
          <Image source={require('../assets/images/arrow.png')} />
        </FooterBotton>
        <FooterBotton>
          <Image source={require('../assets/images/complete.png')} />
        </FooterBotton>
        <FlexGrow>
          <Button onPress={() => null} size={'md'}>
            PAGAR {formatCurrency(total)}
          </Button>
        </FlexGrow>
      </FooterContainer>
    </>
  );
};
