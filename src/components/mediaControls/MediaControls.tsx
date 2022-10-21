import React from 'react';
import { Box } from '../../themes/box/Box';
import { SystemPressable } from '../../themes/systemPressable/SystemPressable';
import { Icon } from '../icon/Icon';

type MediaControlsProps = {
  isPlaying: boolean;
  playPauseIsDisabled?: boolean;
  playPauseTestID?: string;
  onPlayPausePress: () => void;
};

export const MediaControls: React.FC<MediaControlsProps> = ({
  onPlayPausePress,
  isPlaying,
  playPauseIsDisabled,
  playPauseTestID,
}) => {
  return (
    <Box>
      <SystemPressable
        onPress={onPlayPausePress}
        backgroundColor="primary"
        disabled={playPauseIsDisabled}
        padding="l"
        borderRadius="xXXlarge"
        alignContent="center"
        alignItems="center"
        testID={playPauseTestID}
      >
        <Icon icon={isPlaying ? 'pause' : 'play'} size={32} color="white" />
      </SystemPressable>
    </Box>
  );
};
