import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationContext, NavigationProvider } from '../src/context/NavigationContext';
import { LoginScreen } from '../src/screens/LoginScreen';

describe('LoginScreen', () => {
  it('renders correctly', () => {
    const tree = renderer
      .create(
        <NavigationProvider>
          <LoginScreen />
        </NavigationProvider>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('handles username and password inputs', () => {
    const component = renderer.create(
      <NavigationProvider>
        <LoginScreen />
      </NavigationProvider>
    );

    const usernameInput = component.root.find(
      (node) => node.props.placeholder === 'Usuário'
    );
    const passwordInput = component.root.find(
      (node) => node.props.placeholder === 'Senha'
    );

    renderer.act(() => {
      usernameInput.props.onChangeText('teste');
      passwordInput.props.onChangeText('123');
    });

    expect(usernameInput.props.value).toBe('teste');
    expect(passwordInput.props.value).toBe('123');
  });
  
  it('navigates to the Orders screen on login button press', () => {
    const navigateMock = jest.fn();

    const mockContextValue = {
      currentScreen: 'Login',
      params: {},
      navigate: navigateMock,
    };

    const component = renderer.create(
      <NavigationContext.Provider value={mockContextValue}>
        <LoginScreen />
      </NavigationContext.Provider>
    );

    const loginButton = component.root.find(
      (node) => node.props.children === 'ENTRAR'
    );

    renderer.act(() => {
      loginButton.props.onPress();
    });

    expect(navigateMock).toHaveBeenCalledWith('Orders');
  });
});