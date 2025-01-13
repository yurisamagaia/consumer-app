import React from 'react';
import renderer from 'react-test-renderer';
import { Logo } from '../src/components/Logo';

describe('Logo Component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Logo />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});
