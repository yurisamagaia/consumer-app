import React from 'react';
import renderer from 'react-test-renderer';
import { NavigationProvider } from '../src/context/NavigationContext';
import App from '../src/App';

describe('App Component', () => {
  it('renders the NavigationProvider and AppNavigator correctly', () => {
    const tree = renderer.create(
      <NavigationProvider>
        <App />
      </NavigationProvider>
    ).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
