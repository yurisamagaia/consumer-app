import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContext } from '../src/context/NavigationContext';
import { WelcomeScreen } from '../src/screens/WelcomeScreen';

describe('WelcomeScreen', () => {
  it('renders correctly and navigates to Login on button press', () => {
    const navigateMock = jest.fn();

    const mockContextValue = {
      currentScreen: 'Welcome',
      params: {},
      navigate: navigateMock,
    };

    const component = renderer.create(
      <NavigationContext.Provider value={mockContextValue}>
        <WelcomeScreen />
      </NavigationContext.Provider>
    );

    const button = component.root.findByProps({ children: 'INICIAR' });
    renderer.act(() => {
      button.props.onPress();
    });

    expect(navigateMock).toHaveBeenCalledWith('Login');
  });
});
