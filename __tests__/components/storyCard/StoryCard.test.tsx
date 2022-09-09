import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { StoryCard } from '../../../src/components/storyCard/StoryCard';

const onStoryCardPress = jest.fn();
const onBookmarkPress = jest.fn();
const onLikePress = jest.fn();
const defaultTitle = 'Test Title';
const defaultTopic = 'Test topic';
const bookmarkTestId = 'story-card-bookmark-icon';
const heartTestId = 'story-card-heart-icon';

const setup = (
  hasUserBookmarkedStory = false,
  hasUserLikedStory = false,
  title = defaultTitle,
  avatar = 'https://picsum.photos/id/237/200/300'
) =>
  render(
    <StoryCard
      onPress={onStoryCardPress}
      onBookmarkPress={onBookmarkPress}
      onLikePress={onLikePress}
      hasUserBookmarkedStory={hasUserBookmarkedStory}
      hasUserLikedStory={hasUserLikedStory}
      story={{
        id: 'testId',
        title: title,
        likes: 15,
        avatar: avatar,
        topic: defaultTopic,
      }}
    />
  );

describe('components >> story card ', () => {
  beforeEach(
    () => (
      onStoryCardPress.mockClear(),
      onBookmarkPress.mockClear(),
      onLikePress.mockClear()
    )
  );

  test('Should find story title', () => {
    const { getByText } = setup();
    expect(getByText(defaultTitle)).toBeDefined();
  });

  test('Should find story topic', () => {
    const { getByText } = setup();
    expect(getByText(defaultTopic)).toBeDefined();
  });

  describe('Given user presses story card', () => {
    test('Should play audio', () => {
      const { getByText } = setup();
      fireEvent.press(getByText(defaultTitle));
      expect(onStoryCardPress).toBeCalledTimes(1);
    });
  });

  describe('Given user has NOT liked story', () => {
    test('Should like story', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId(heartTestId));
      expect(onLikePress).toBeCalledTimes(1);
    });
  });

  describe('Given user has NOT bookmarked story', () => {
    test('Should bookmark story', () => {
      const { getByTestId } = setup();
      fireEvent.press(getByTestId(bookmarkTestId));
      expect(onBookmarkPress).toBeCalledTimes(1);
    });
  });

  describe('Given user HAS liked story', () => {
    test('Should render story card with like', () => {
      const { toJSON } = setup(true, false);
      expect(toJSON()).toMatchSnapshot();
    });

    describe('Given user un likes story', () => {
      test('Should un like story', () => {
        const { getByTestId } = setup(true, false);
        fireEvent.press(getByTestId(heartTestId));
        expect(onLikePress).toBeCalledTimes(1);
      });
    });
  });

  describe('Given user HAS bookmarked story', () => {
    test('Should render story card with like', () => {
      const { toJSON } = setup(false, true);
      expect(toJSON()).toMatchSnapshot();
    });

    describe('Given user un bookmarks story', () => {
      test('Should un bookmark story', () => {
        const { getByTestId } = setup(true, false);
        fireEvent.press(getByTestId(bookmarkTestId));
        expect(onBookmarkPress).toBeCalledTimes(1);
      });
    });
  });
});
