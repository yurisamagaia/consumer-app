import React from 'react';
import { NavigationProvider } from './context/NavigationContext';
import { AppNavigator } from './navigation/AppNavigator';
import { AppProvider } from './context/AppContext';

const App: React.FC = () => {
  return (
    <AppProvider>
      <NavigationProvider>
        <AppNavigator />
      </NavigationProvider>
    </AppProvider>
  );
};

export default App;
