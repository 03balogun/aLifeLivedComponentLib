import React from 'react';

import { storiesOf } from '@storybook/react-native';

// Component
import { Button } from './Button';
import { action } from '@storybook/addon-actions';
import { CenterView } from '../centerView/CenterView';
import { Box } from '../../themes/box/Box';
import { Icon } from '../icon/Icon';

storiesOf('Button', module)
  .addDecorator(Story => <CenterView>{Story()}</CenterView>)
  .add('Default button', () => (
    <Box alignItems="center" width="100%">
      <Box width="90%" margin="m">
        <Button
          title="Test button that has a long long title"
          onPress={action('Button on press fired')}
          isLoading={false}
          isDisabled={false}
          color="backgroundContrastXLow"
          backgroundColor="secondary"
        />
      </Box>
      <Box width="90%" margin="m">
        <Button
          title="Loading button"
          onPress={action('Button on press')}
          isLoading={true}
          isDisabled={false}
        />
      </Box>
      <Box width="90%" margin="m">
        <Button
          title="Disabled button"
          onPress={action('Button on press')}
          isLoading={false}
          isDisabled={true}
        />
      </Box>
      <Box width="90%" margin="m">
        <Button
          title="Button with adornment"
          onPress={action('Button on press')}
          isLoading={false}
          isDisabled={true}
          endAdornmentComponent={<Icon icon="play" />}
        />
      </Box>
      <Box margin="m" width="50%">
        <Button
          title="Play all"
          onPress={action('Button on press')}
          isLoading={false}
          endAdornmentComponent={<Icon color="white" icon="play" />}
          color="white"
        />
      </Box>
    </Box>
  ));
