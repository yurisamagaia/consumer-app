import React from 'react';
import renderer from 'react-test-renderer';
import { Button } from '../src/components/Button';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    const tree = renderer
      .create(<Button onPress={() => {}}>Click Me</Button>)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with the "md" size', () => {
    const tree = renderer
      .create(
        <Button onPress={() => {}} size="md">
          Medium Button
        </Button>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('renders correctly with the "lg" size', () => {
    const tree = renderer
      .create(
        <Button onPress={() => {}} size="lg">
          Large Button
        </Button>
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
