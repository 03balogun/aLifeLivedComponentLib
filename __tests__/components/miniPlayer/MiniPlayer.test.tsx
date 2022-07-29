import React from 'react';
import { render, fireEvent } from './../../../jest/renderUtil';

// Component
import { MiniPlayer } from '../../../src/components/miniPlayer/MiniPlayer';

const mockOnAudioPause = jest.fn();
const mockOnAudioPlay = jest.fn();
const mockOnMiniPlayerPress = jest.fn();
const title = 'This is a test story title';
const username = 'test_username';
let avatar = 'https://picsum.photos/id/237/200/300';

const setup = (
  isDisabled: boolean,
  mediaControlIcon: 'play' | 'pause',
  mediaControlAction = mockOnAudioPlay,
  audioProgress = 0,
  headPhonesConnected = false
) => {
  const utils = render(
    <MiniPlayer
      audioProgress={audioProgress}
      isDisabled={isDisabled}
      title={title}
      username={username}
      avatar={avatar}
      mediaControlIcon={mediaControlIcon}
      mediaControlAction={mediaControlAction}
      onMiniPlayerPress={mockOnMiniPlayerPress}
      isHeadphonesConnected={headPhonesConnected}
    />
  );

  return {
    ...utils,
  };
};

describe('component >> miniPlayer', () => {
  test('Should find title and username', () => {
    const { getByText } = setup(false, 'play', mockOnAudioPlay);
    expect(getByText(title)).not.toBeNull();
    expect(getByText(username)).not.toBeNull();
  });

  test('Should find avatar id', () => {
    const { getByTestId } = setup(false, 'play', mockOnAudioPlay);
    expect(getByTestId('miniPlayer-avatar')).not.toBeNull();
  });

  describe('Given story has NO profile image', () => {
    beforeEach(() => (avatar = ''));
    test('Should render default profile image', () => {
      const { toJSON } = setup(false, 'play', mockOnAudioPlay);
      expect(toJSON()).toMatchSnapshot();
    });
  });

  describe('Given headphones are connected', () => {
    test('Should show headphone icon', () => {
      const { getByTestId } = setup(false, 'pause', mockOnAudioPlay, 0, true);
      expect(getByTestId('headphone-test-id')).toBeDefined();
    });
  });

  describe('Given mini player is PLAYING', () => {
    const mediaControlIcon = 'play';
    beforeEach(
      () => (
        (avatar = 'https://picsum.photos/id/237/200/300'),
        mockOnAudioPause.mockReset(),
        mockOnAudioPlay.mockClear(),
        mockOnMiniPlayerPress.mockClear()
      )
    );

    test('Should render component correctly', () => {
      const { toJSON } = setup(false, mediaControlIcon, mockOnAudioPlay);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should fire onAudioPlay() action', () => {
      const { getByTestId } = setup(false, mediaControlIcon, mockOnAudioPlay);
      fireEvent.press(getByTestId('mediaControl-icon'));
      expect(mockOnAudioPlay).toBeCalledTimes(1);
      expect(mockOnAudioPause).toBeCalledTimes(0);
      expect(mockOnMiniPlayerPress).toBeCalledTimes(0);
    });

    test('Should fire onMiniPlayerPress() action', () => {
      const { getByText } = setup(false, mediaControlIcon, mockOnAudioPlay);
      fireEvent.press(getByText(title));
      expect(mockOnAudioPlay).toBeCalledTimes(0);
      expect(mockOnAudioPause).toBeCalledTimes(0);
      expect(mockOnMiniPlayerPress).toBeCalledTimes(1);
    });
  });

  describe('Given mini player is PAUSED', () => {
    beforeEach(
      () => (
        (avatar = 'https://picsum.photos/id/237/200/300'),
        mockOnAudioPause.mockReset(),
        mockOnAudioPlay.mockClear(),
        mockOnMiniPlayerPress.mockClear()
      )
    );
    const playerState = 'pause';
    test('Should render component correctly', () => {
      const { toJSON } = setup(false, playerState, mockOnAudioPause);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should fire onAudioPause() action', () => {
      const { getByTestId } = setup(false, playerState, mockOnAudioPause);
      fireEvent.press(getByTestId('mediaControl-icon'));
      expect(mockOnAudioPlay).toBeCalledTimes(0);
      expect(mockOnAudioPause).toBeCalledTimes(1);
      expect(mockOnMiniPlayerPress).toBeCalledTimes(0);
    });

    test('Should fire onMiniPlayerPress() action', () => {
      const { getByText } = setup(false, playerState, mockOnAudioPause);
      fireEvent.press(getByText(title));
      expect(mockOnAudioPlay).toBeCalledTimes(0);
      expect(mockOnAudioPause).toBeCalledTimes(0);
      expect(mockOnMiniPlayerPress).toBeCalledTimes(1);
    });
  });

  describe('Given mini player DISABLED and PLAYING', () => {
    beforeEach(
      () => (
        (avatar = 'https://picsum.photos/id/237/200/300'),
        mockOnAudioPause.mockReset(),
        mockOnAudioPlay.mockClear(),
        mockOnMiniPlayerPress.mockClear()
      )
    );
    const playerState = 'pause';
    const isDisabled = true;
    test('Should render component correctly', () => {
      const { toJSON } = setup(isDisabled, playerState);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should NOT fire onAudioPause() action', () => {
      const { getByTestId } = setup(isDisabled, playerState, mockOnAudioPause);
      fireEvent.press(getByTestId('mediaControl-icon'));
      expect(mockOnAudioPlay).toBeCalledTimes(0);
      expect(mockOnAudioPause).toBeCalledTimes(0);
      expect(mockOnMiniPlayerPress).toBeCalledTimes(0);
    });

    test('Should fire onMiniPlayerPress() action', () => {
      const { getByText } = setup(isDisabled, playerState);
      fireEvent.press(getByText(title));
      expect(mockOnAudioPlay).toBeCalledTimes(0);
      expect(mockOnAudioPause).toBeCalledTimes(0);
      expect(mockOnMiniPlayerPress).toBeCalledTimes(0);
    });
  });

  describe('Given mini player DISABLED and NOT PLAYING', () => {
    beforeEach(
      () => (
        (avatar = 'https://picsum.photos/id/237/200/300'),
        mockOnAudioPause.mockReset(),
        mockOnAudioPlay.mockClear(),
        mockOnMiniPlayerPress.mockClear()
      )
    );
    const playerState = 'play';
    const isDisabled = true;
    test('Should render component correctly', () => {
      const { toJSON } = setup(isDisabled, playerState);
      expect(toJSON()).toMatchSnapshot();
    });

    test('Should find title and username', () => {
      const { getByText } = setup(isDisabled, playerState);
      expect(getByText(title)).not.toBeNull();
      expect(getByText(username)).not.toBeNull();
    });

    test('Should find avatar id', () => {
      const { getByTestId } = setup(isDisabled, playerState);
      expect(getByTestId('miniPlayer-avatar')).not.toBeNull();
    });

    test('Should NOT fire onAudioPlayAction() action', () => {
      const { getByTestId } = setup(isDisabled, playerState, mockOnAudioPlay);
      fireEvent.press(getByTestId('mediaControl-icon'));
      expect(mockOnAudioPlay).toBeCalledTimes(0);
      expect(mockOnAudioPause).toBeCalledTimes(0);
      expect(mockOnMiniPlayerPress).toBeCalledTimes(0);
    });

    test('Should fire onMiniPlayerPress() action', () => {
      const { getByText } = setup(isDisabled, playerState);
      fireEvent.press(getByText(title));
      expect(mockOnAudioPlay).toBeCalledTimes(0);
      expect(mockOnAudioPause).toBeCalledTimes(0);
      expect(mockOnMiniPlayerPress).toBeCalledTimes(0);
    });
  });
});
