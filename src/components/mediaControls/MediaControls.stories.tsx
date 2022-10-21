import React, { useState } from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { MediaControls } from './MediaControls';

// UI
import { Box } from '../../themes/box/Box';

const MediaPlayerComponent = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <MediaControls
      isPlaying={isPlaying}
      onPlayPausePress={() => setIsPlaying(!isPlaying)}
    />
  );
};

storiesOf('MiniPlayer', module)
  .addDecorator(Story => (
    <Box
      alignContent="center"
      alignItems="center"
      justifyContent="center"
      flex={1}
    >
      {Story()}
    </Box>
  ))
  .add('Media Controls', () => <MediaPlayerComponent />);
