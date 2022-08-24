import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

// Component
import { DiscoverHeader } from './DiscoverHeader';
import { Box } from '../../themes/box/Box';

storiesOf('Headers', module)
  .addDecorator(Story => Story())
  .add('Discover header', () => (
    <Box margin="m">
      <DiscoverHeader
        fullName={text('Title', 'John Smith')}
        avatarUrl=""
        onAvatarPress={action('Avatar press')}
        onSearchIconPress={action('Search icon press')}
        avatarTestID="avatar-test-id"
        searchTestID="search-test-id"
      />
    </Box>
  ));
