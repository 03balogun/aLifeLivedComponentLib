import React from 'react';
import { fireEvent, render } from '../../../jest/renderUtil';
import { MediaSlider } from '../../../src/components/mediaSlider/MediaSlider';

const onSlideCompleteMock = jest.fn();

const setup = () =>
  render(
    <MediaSlider
      minValue={0}
      maxValue={100}
      currentNumericPosition={50}
      currentDisplayPosition="00:50"
      remainingDuration="-00:50"
      testID="slider-test-id"
      onSlideComplete={onSlideCompleteMock}
      onValueChange={onSlideCompleteMock}
    />
  );

describe('Given the user is listening to a story', () => {
  test('Should display current position', () => {
    const { getByText } = setup();
    expect(getByText('00:50'));
  });

  test('Should display remaining time', () => {
    const { getByText } = setup();
    expect(getByText('-00:50'));
  });
});
