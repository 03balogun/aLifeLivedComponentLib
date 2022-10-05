import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { StoryCard } from '../../../src/components/storyCard/StoryCard';

const onStoryCardPress = jest.fn();
const onEndAdornmentPress = jest.fn();
const defaultTitle = 'Test Title';

const setup = (
  avatar = 'https://picsum.photos/id/237/200/300',
  isStoryPlaying = false
) =>
  render(
    <StoryCard
      onPress={onStoryCardPress}
      title="Test Title"
      avatar={avatar}
      interviewer="John Smith"
      testID="story-card-test-id"
      isStoryPlaying={isStoryPlaying}
      endAdornmentIconName="play-circle"
      endAdornmentIconTestId="end-adornment-test-id"
      onEndAdornmentPress={onEndAdornmentPress}
    />
  );

describe('Story Card', () => {
  beforeEach(
    () => (onStoryCardPress.mockClear(), onEndAdornmentPress.mockClear())
  );

  test('Should find story title', () => {
    const { getByText } = setup();
    expect(getByText(defaultTitle)).toBeDefined();
  });

  test('Should find interviewer', () => {
    const { getByText } = setup();
    expect(getByText('John Smith')).toBeDefined();
  });

  describe('Given story is playing', () => {
    test('Should NOT find end adornment AND have playing animation', () => {
      const { queryByTestId } = setup('', true);
      expect(queryByTestId('end-adornment-test-id')).toBeNull();
    });
  });

  describe('Given user presses end adornment', () => {
    test('Should fire endAdornmentPress', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId('end-adornment-test-id'));
      expect(onEndAdornmentPress).toBeCalledTimes(1);
    });
  });

  describe('Given user presses story card', () => {
    test('Should play audio', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId('story-card-test-id'));
      expect(onStoryCardPress).toBeCalledTimes(1);
    });
  });
});
