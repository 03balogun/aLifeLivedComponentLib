import React from 'react';
import { fireEvent, render } from '../../../jest/renderUtil';
import { MediaControls } from '../../../src/components/mediaControls/MediaControls';

const mockOnPlayPausePress = jest.fn();
const setup = ({
  isAudioPlaying = false,
  playPauseIsDisabled = false,
}: {
  playPauseIsDisabled?: boolean;
  isAudioPlaying?: boolean;
}) =>
  render(
    <MediaControls
      playPauseIsDisabled={playPauseIsDisabled}
      onPlayPausePress={mockOnPlayPausePress}
      isPlaying={isAudioPlaying}
      playPauseTestID="play-pause-test-id"
    />
  );

describe('Given user is listening to a story', () => {
  beforeEach(() => mockOnPlayPausePress.mockClear());
  test('Should render media controls', () => {});

  describe('Given user presses Play and Pause button', () => {
    test('Should fire on play/pause function', () => {
      const { getByTestId } = setup({});
      fireEvent.press(getByTestId('play-pause-test-id'));
      expect(mockOnPlayPausePress).toBeCalledTimes(1);
    });
  });

  describe('Given Play/Pause button is disabled', () => {
    test('Should NOT fire play/pause function', () => {
      const { getByTestId } = setup({ playPauseIsDisabled: true });
      fireEvent.press(getByTestId('play-pause-test-id'));
      expect(mockOnPlayPausePress).toBeCalledTimes(0);
    });
  });
});
