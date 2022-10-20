import React from 'react';
import { render } from '../../../jest/renderUtil';
import { SystemSlider } from '../../../src/themes/systemSlider/SystemSlider';

const setup = () => render(<SystemSlider />);

describe('SystemSlider', () => {
  test('Should match snapshot', () => {
    const { toJSON } = setup();
    expect(toJSON()).toMatchSnapshot();
  });
});
