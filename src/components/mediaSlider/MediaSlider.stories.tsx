import React from 'react';
import { storiesOf } from '@storybook/react-native';

// Component
import { MediaSlider } from './MediaSlider';

// UI
import { Box } from '../../themes/box/Box';

storiesOf('MiniPlayer', module)
  .addDecorator(Story => (
    <Box
      position="absolute"
      bottom={20}
      right={0}
      left={0}
      marginLeft="l"
      marginRight="l"
    >
      {Story()}
    </Box>
  ))
  .add('Slider', () => (
    <MediaSlider
      maxValue={100}
      minValue={10}
      currentNumericPosition={90}
      currentDisplayPosition="10:00"
      remainingDuration="30:00"
      onSlideComplete={value => console.log('ON SLIDE COMPLETE', value)}
      onValueChange={value => console.log('ON VALUE CHANGE', value)}
    />
  ));
