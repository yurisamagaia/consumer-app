import React, { createContext, useState } from 'react';
import { AppContextType, AppProviderProps, Item, Order } from '../types';

const defaultValue: AppContextType = {
  orders: [],
};

export const AppContext = createContext<AppContextType>(defaultValue);

const items: Item[] = [{
  id: 1,
  name: '1x Alabama apimentado',
  price: 35,
  obs: 'Sem cebola',
  extra: ['+ Bacon (R$ 2,30)'],
}, {
  id: 2,
  name: '1x Coca-Cola 350ml',
  price: 6.9,
}, {
  id: 3,
  name: '1x Pizza Grande',
  price: 72.9,
  obs: 'Sem cebola',
  extra: ['1/2 Calabresa', '1/2 Frango Especial'],
}, {
  id: 4,
  name: '1x Suco de laranja Natual',
  price: 12.9,
  obs: 'Com gelo, Sem açúcar',
}, {
  id: 5,
  name: '1x Alabama apimentado',
  price: 35,
  obs: 'Sem cebola',
  extra: ['+ Bacon (R$ 2,30)'],
}];

const order = {
  client: 'José Maria da Silva',
  people: 4,
  totalTime: 45,
  items: items,
  isClosing: false,
  mine: false,
};

export const AppProvider = ({ children }: AppProviderProps) => {
  const [orders] = useState<Order[]>([
    { id: 9,  ...order, mine: true },
    { id: 12, ...order, mine: true },
    { id: 15, ...order, isClosing: true, mine: true },
    { id: 22, ...order, mine: true },
    { id: 23, ...order },
    { id: 25, ...order, isClosing: true },
    { id: 31, ...order },
    { id: 33, ...order, isClosing: true },
    { id: 34, ...order },
    { id: 35, ...order },
    { id: 40, ...order },
  ]);

  return (
    <AppContext.Provider value={{ orders }}>
      {children}
    </AppContext.Provider>
  );
};
