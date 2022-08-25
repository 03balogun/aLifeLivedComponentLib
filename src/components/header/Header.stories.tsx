import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import { Header } from './Header';
import { Box } from '../../themes/box/Box';

storiesOf('Headers', module)
  .addDecorator(Story => Story())
  .add('Header', () => (
    <Box margin="m">
      <Header
        fullName={text('Title', 'John Smith')}
        avatarUrl="https://picsum.photos/id/237/200/300"
        iconName="bookmark"
        onAvatarPress={action('Avatar press')}
        onIconPress={action('Search icon press')}
        avatarTestID="avatar-test-id"
        iconTestID="icon-test-id"
      />
    </Box>
  ));
